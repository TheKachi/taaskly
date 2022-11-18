import { User } from 'firebase/auth'
import { updateFirestoreDocument } from '../../firebase/firestore'
import { useAlert, useLoading } from '../core/useNotification'
import { useUser } from '@/composables/auth/user'
import { callFirebaseFunction } from '@/firebase/functions'

const profileFormState = {
	first_name: ref(''),
	last_name: ref(''),
	email: ref(''),
	phone: ref(''),
	student: ref(false),
	university: ref(''),
	address: ref(''),
	dob: ref(''),
	desc: ref('')
}

const formStep = ref(1)
export const useCreateProfile = () => {
	const loading = ref(false)
	const createProfile = async () => {
		if (formStep.value === 1) {
			formStep.value = 2
		} else {
			loading.value = true
			try {
				await updateFirestoreDocument('users', useUser().id.value as string, {
					first_name: profileFormState.first_name.value,
					last_name: profileFormState.last_name.value,
					email: profileFormState.email.value,
					phone: profileFormState.phone.value,
					student: profileFormState.student.value,
					university: profileFormState.university.value,
					address: profileFormState.address.value,
					dob: profileFormState.dob.value,
					desc: profileFormState.desc.value
				})
				// await updateProfileClaim()
				useUser().setProfileStatus(true)
				useRouter().push('/dashboard')
				loading.value = false
			} catch (e: any) {
				loading.value = false
				useAlert().openAlert(`Error: ${e.message}`)
			}
		}
	}

	// const updateProfileClaim = async () => {
	// 	await callFirebaseFunction('updateProfileClaim', {
	// 		uid: useUser().id.value
	// 	})
	// }

	const initForm = () => {
		profileFormState.email.value = useUser().user?.email as string
		profileFormState.first_name.value = useUser().user?.displayName?.split(
			' '
		)[0] as string
		profileFormState.last_name.value = useUser().user?.displayName?.split(
			' '
		)[1] as string
	}
	return { createProfile, formStep, profileFormState, loading, initForm }
}
