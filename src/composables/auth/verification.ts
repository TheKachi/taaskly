
const verificationFormState = {
	first_name: ref(''),
	last_name: ref(''),
	email: ref(''),
	phone: ref(''),
	student: ref('false'),
	university: ref('')
}

export const useVerification = () => {
    const loading = ref(false)

    return { verificationFormState }
}
