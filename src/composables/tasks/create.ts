const formStep = ref(1)

const createTaskForm = {
    desc: ref(''),
    dueDate: ref(''),
    amount: ref(''),
    status: ref(''),
    title: ref(''),
    remote: ref(false),
    location: ref(''),
    tags: ref([])
}

export const createTask = () => {
    const create = () => {
        if (formStep.value === 1) {
            formStep.value = 2
            return
        }
        formStep.value = 1
    }
    return { formStep, create, createTaskForm }
}
