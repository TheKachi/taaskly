
import { getSingleFirestoreDocument } from '@/firebase/firestore'
import { useAlert } from '@/composables/core/useNotification'

const taskIdDetails = ref({})
export const useFetchIdTask = () => {
const loading = ref(false)
	const fetchIdTask = async (id:string) => {
		if (Object.keys(taskIdDetails.value).length > 0) return
        loading.value = true
		try {
            const task = await getSingleFirestoreDocument('tasks', id)
            taskIdDetails.value = task
			loading.value = false
        } catch (e: any) {
			loading.value = false
			useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
		}
	}

	return { taskIdDetails, fetchIdTask, loading }
}

export const useTaskIdDetails = () => {
    const showTaskIdDetailsPage = (task: any) => {
        taskIdDetails.value = task
        useRouter().push(`/main/tasks/${task.id}`)
    }

    return { showTaskIdDetailsPage }
}
