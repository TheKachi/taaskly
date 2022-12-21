const formStep = ref(1)

export const createTask = () => {
    const create = () => {
        if (formStep.value === 1) {
            formStep.value = 2
            return
        }
        formStep.value = 1
    }
    return { formStep, create }
}
