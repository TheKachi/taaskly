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
    const create = () => {
        if (formStep.value === 1) {
            formStep.value = 2
            return
        }
       console.log(createTaskForm)
    }
    return { formStep, create, createTaskForm }
}
