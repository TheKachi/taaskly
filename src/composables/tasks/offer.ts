import { useTaskModal } from '@/composables/core/modals'
import { useAlert } from '@/composables/core/useNotification'

const globalData = {
	selectedTask: ref({}),
	taskId: ref('')
}
   const credential = {
        type: ref(''),
        price: ref(''),
        offerMsg: ref('')
    }

export const useOfferTask = () => {
    const loading = ref(false)

	const setTask = (task: any) => {
        globalData.selectedTask.value = task
        credential.price.value = task.price
         useTaskModal().openOfferTask()
	}
	// const flagTask = async () => {
	// 	loading.value = true
	// 	try {
	// 		// await updateFirestoreDocument('tasks', globalData.taskId.value, { flags: arrayUnion({ userId: userId.value, reason: flagReason.value }) })
	// 		loading.value = false
	// 		useTaskModal().closeOfferTask()
	// 	} catch (e: any) {
	// 		loading.value = false
	// 		useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
	// 	}
	// }
	return { loading, setTask, ...globalData, credential }
}
