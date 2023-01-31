import { getFirestoreSubCollection, setFirestoreSubDocument } from '@/firebase/firestore'
import { useTaskModal } from '@/composables/core/modals'
import { useAlert } from '@/composables/core/useNotification'
import { useUser } from '@/composables/auth/user'

const { id: userId, username } = useUser()
const globalData = {
	selectedTask: ref({} as any),
	taskId: ref('')
}
   const credential = {
        type: ref(''),
        price: ref(''),
        offerMsg: ref(''),
        status: ref(''),
		step: ref(0)
    }

export const useOfferTask = () => {
    const loading = ref(false)

	const setTask = (task: any) => {
        globalData.selectedTask.value = task
        credential.price.value = task.price
         useTaskModal().openOfferTask()
	}

	const makeOffer = async () => {
		if (credential.step.value === 0) return credential.step.value++
		else {
			loading.value = true
			try {
			await setFirestoreSubDocument('tasks', globalData.selectedTask.value.id, 'offers', userId.value as string, {
				id: userId.value,
				type: credential.type.value,
				price: credential.price.value,
				status: credential.status.value,
				offerMsg: credential.offerMsg.value,
				user: {
					id: userId.value,
					username: username.value
				}
			})
			loading.value = false
			useTaskModal().closeOfferTask()
			useAlert().openAlert({ type: 'SUCCESS', msg: 'Offer sent' })
		} catch (e: any) {
			loading.value = false
			useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
		}
		}
	}

	return { loading, setTask, ...globalData, credential, makeOffer }
}

export const useFetchOffers = () => {
	const offers = ref([])
	const loading = ref(false)

		const fetchOffers = async (id:string) => {
		if (offers.value.length > 0) return
        loading.value = true
        try {
			await getFirestoreSubCollection('tasks', id, 'offers', offers)
			loading.value = false
			console.log(offers.value)
		} catch (e: any) {
			loading.value = false
			useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
		}
	}
	return { loading, offers, fetchOffers }
}
