import { saveFirestoreDocument } from '../../firebase/firestore'
import { useAlert } from '../core/useNotification'
import { useUser } from './user'
import { uploadBlob } from '@/firebase/storage'

const { id } = useUser()
const verificationFormState = {
	student: ref('false'),
	id_type: ref(''),
	document: ref()
}

export const useVerification = () => {
	const loading = ref(false)
	const percentage = ref()
	const verify = async () => {
		loading.value = true
		try {
			await uploadBlob('verification/me', verificationFormState.document.value)
			await saveFirestoreDocument('Verification', id.value as string, {
				student: verificationFormState.student.value,
				id_type: verificationFormState.id_type.value,
				createdAt: new Date().toISOString()
			})
			loading.value = false
		} catch (e:any) {
			useAlert().openAlert({ type: 'ERROR', msg: e.message })
			loading.value = false
		}
	}
	return { verify, verificationFormState, loading, percentage }
}
