import { v4 as uuidv4 } from 'uuid'
import { useTaskModal } from '@/composables/core/modals'
import { useAlert } from '@/composables/core/useNotification'
import { setFirestoreSubDocument } from '@/firebase/firestore'
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
				offerMsg: credential.offerMsg.value
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
	const loading = ref(false)

	return { loading }
}
