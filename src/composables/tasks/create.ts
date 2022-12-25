import { v4 as uuidv4 } from 'uuid'
import { saveFirestoreDocument } from '@/firebase/firestore'
import { useAlert } from '@/composables/core/useNotification'
import { useTaskModal } from '@/composables/core/modals'

const formStep = ref(1)

const createTaskForm = {
    desc: ref(''),
    startDate: ref(''),
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
        loading.value = true
        if (formStep.value === 1) {
            formStep.value = 2
            return
        }

        try {
            await saveFirestoreDocument('tasks', uuidv4(), {
                desc: createTaskForm.desc.value,
                startDate: createTaskForm.startDate.value,
                amount: createTaskForm.amount.value,
                status: createTaskForm.status.value,
                offers: createTaskForm.offers.value,
                remote: createTaskForm.remote.value,
                location: createTaskForm.location.value,
                tags: createTaskForm.tags.value
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
