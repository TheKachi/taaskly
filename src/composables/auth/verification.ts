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
	const { percentage, create } = uploadBlob(`Verification/${id.value}`, verificationFormState.document.value as Blob)

	const verify = async () => {
		loading.value = true
		try {
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

	const uploadFile = async () => {
		loading.value = true
		try {
			create()
			loading.value = false
		} catch (e:any) {
			useAlert().openAlert({ type: 'ERROR', msg: e.message })
			loading.value = false
		}
	}

	return { verify, uploadFile, verificationFormState, loading, percentage }
}
