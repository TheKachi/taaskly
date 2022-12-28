import { v4 as uuidv4 } from 'uuid'
import { saveFirestoreDocument, getFirestoreUserCollection } from '@/firebase/firestore'
import { useAlert } from '@/composables/core/useNotification'
import { useTaskModal } from '@/composables/core/modals'
import { useUser } from '@/composables/auth/user'

const formStep = ref(1)
const { id: userId, username } = useUser()
const createTaskForm = {
    desc: ref(''),
    created_at: ref(new Date().toISOString()),
    updated_at: ref(new Date().toISOString()),
    userId: userId.value,
    startDate: ref(''),
    amount: ref(''),
    status: ref('available'),
    offers: ref(0),
    remote: ref(false),
    location: ref({}),
    tags: ref([]),
    user: {
        id: userId.value,
        username: username.value
    }
}

export const useCreateTask = () => {
    const loading = ref(false)
    const create = async () => {
        loading.value = true
        if (formStep.value === 1) {
            formStep.value = 2
            return
        }

        try {
            await saveFirestoreDocument('tasks', uuidv4(), {
                userId: createTaskForm.userId,
                desc: createTaskForm.desc.value,
                startDate: createTaskForm.startDate.value,
                amount: createTaskForm.amount.value,
                status: createTaskForm.status.value,
                offers: createTaskForm.offers.value,
                remote: createTaskForm.remote.value,
                location: createTaskForm.location.value,
                tags: createTaskForm.tags.value,
                created_at: createTaskForm.created_at.value,
                updated_at: createTaskForm.updated_at.value
            })
            loading.value = false
            useTaskModal().closeCreateTask()
        } catch (e:any) {
            loading.value = false
            useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
        }
    }

    return { formStep, create, createTaskForm, loading }
}

export const useFetchHomeTasks = () => {
    const loading = ref(false)
    const tasks = ref([])

    const fetchHomeTasks = async () => {
        loading.value = true
        try {
            tasks.value = await getFirestoreUserCollection('tasks')
            loading.value = false
        } catch (e:any) {
            loading.value = false
            useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
        }
    }

    return { tasks, fetchHomeTasks, loading }
}