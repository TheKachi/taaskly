import { v4 as uuidv4 } from 'uuid'
import { saveFirestoreDocument } from '@/firebase/firestore'
import { useAlert } from '@/composables/core/useNotification'

const formStep = ref(1)

const createTaskForm = {
    desc: ref(''),
    dueDate: ref(''),
    amount: ref(''),
    status: ref('available'),
    offers: ref(0),
    remote: ref(false),
    location: ref({}),
    tags: ref([])
}

export const createTask = () => {
    const loading = ref(false)
    const create = async () => {
        if (formStep.value === 1) {
            formStep.value = 2
            return
        }
        try {
            await saveFirestoreDocument('tasks', uuidv4(), {
            })
        } catch (e:any) {
            loading.value = false
            useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
        }
    }

    return { formStep, create, createTaskForm, loading }
}
