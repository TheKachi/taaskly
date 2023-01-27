import { v4 as uuidv4 } from 'uuid'
import { useTaskModal } from '@/composables/core/modals'
import { useAlert } from '@/composables/core/useNotification'
import { setFirestoreDocument } from '@/firebase/firestore'

const globalData = {
	selectedTask: ref({}),
	taskId: ref('')
}
   const credential = {
        type: ref(''),
        price: ref(''),
        offerMsg: ref(''),
        step: ref(0)
    }

export const useOfferTask = () => {
    const loading = ref(false)

	const setTask = (task: any) => {
        globalData.selectedTask.value = task
        credential.price.value = task.price
         useTaskModal().openOfferTask()
	}
	setFirestoreDocument

	const makeOffer = async () => {
		if (credential.step.value === 0) return credential.step.value++
		else {
			const offerId = uuidv4()
			try {
			await setFirestoreDocument('tasks', offerId, {

			})
			loading.value = false
			useTaskModal().closeCreateTask()
			useAlert().openAlert({ type: 'SUCCESS', msg: 'Offer sent' })
		} catch (e: any) {
			loading.value = false
			useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
		}
		}
	}

	return { loading, setTask, ...globalData, credential, makeOffer }
}
