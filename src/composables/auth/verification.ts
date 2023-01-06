import { profileData } from './profile'
import { useUser } from '@/composables/auth/user'
import { setFirestoreDocument } from '@/firebase/firestore'
import { useAuthModal } from '@/composables/core/modals'
import { useAlert } from '@/composables/core/useNotification'
import { uploadBlob } from '@/firebase/storage'
import { callFirebaseFunction } from '@/firebase/functions'

const { id } = useUser()
const verificationFormState = {
	student: ref('false'),
	id_type: ref(''),
	document: ref() as any
}

export const useVerification = () => {
	const loading = ref(false)
	const { percentage, create, downloadURL } = uploadBlob(`Verification/${id.value}`, verificationFormState.document as Blob)

	const verify = async () => {
		loading.value = true
		try {
			await setFirestoreDocument('Verification', id.value as string, {
				student: verificationFormState.student.value,
				id_type: verificationFormState.id_type.value,
				createdAt: new Date().toISOString(),
				downloadURL: downloadURL.value
			})
			await callFirebaseFunction('updateVerificationLevel', { level: 1 })
			loading.value = false
			profileData.value.verifiedLevel = 1
			useAuthModal().closeDefaultVerification()
			useAlert().openAlert({ type: 'SUCCESS', msg: 'Verification submitted' })
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
