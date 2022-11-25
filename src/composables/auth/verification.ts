import { uploadBlob } from '@/firebase/storage'

const verificationFormState = {
	student: ref('false'),
	id_type: ref(''),
	document: ref()
}

export const useVerification = () => {
    const loading = ref(false)
	const verify = async () => {
		loading.value = true
		await uploadBlob('verification/me', verificationFormState.document.value)
	}
    return { verify, verificationFormState, loading }
}
