import { User } from 'firebase/auth'
import { saveFirestoreDocument, getSingleFirestoreDocument } from '../../firebase/firestore'
import { useAlert, useLoading } from '../core/useNotification'
import { useUser } from '@/composables/auth/user'

const profileFormState = {
	first_name: ref(''),
	last_name: ref(''),
	email: ref(''),
	phone: ref(''),
	student: ref(''),
	university: ref(''),
	address: ref(''),
	gender: ref(''),
	dob: ref(''),
	desc: ref(''),
	verifiedLevel: ref(0),
	walletBalance: ref(0),
    profileLevel: ref(0),
	tasker_rating: ref(false),
	runner_rating: ref(false),
	created_at: ref(new Date().toISOString()),
	updated_at: ref(new Date().toISOString())
}
const profileData = ref()
const { id } = useUser()
const formStep = ref(1)
export const useCreateProfile = () => {
	const loading = ref(false)
	const createProfile = async () => {
		// if (formStep.value === 1) {
		// 	formStep.value = 2
		// } else {
			loading.value = true
			try {
				await saveFirestoreDocument('users', useUser().id.value as string, {
					id: id.value,
					first_name: profileFormState.first_name.value,
					last_name: profileFormState.last_name.value,
					email: profileFormState.email.value,
					phone: profileFormState.phone.value,
					// student: JSON.parse(profileFormState.student.value.toLowerCase()),
					student: profileFormState.student.value,
					university: profileFormState.university.value,
					address: profileFormState.address.value,
					gender: profileFormState.gender.value,
					dob: profileFormState.dob.value,
					desc: profileFormState.desc.value,
					verifiedLevel: profileFormState.verifiedLevel.value,
					profileLevel: profileFormState.profileLevel.value,
					tasker_rating: profileFormState.tasker_rating.value,
					runner_rating: profileFormState.runner_rating.value,
					created_at: profileFormState.created_at.value,
					updated_at: profileFormState.updated_at.value
				})
				// await updateProfileClaim()
				useUser().setProfileStatus(true)
				useRouter().push('/profile?q=verification')
				loading.value = false
			} catch (e: any) {
				loading.value = false
				useAlert().openAlert({ type: 'ERROR', msg: `Error: ${e.message}` })
			}
		// }
	}

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

export const useProfile = () => {
	const loading = ref(false)
	const getProfile = async () => {
		if (profileData.value?.email) {
			loading.value = false
			return
		}
		profileData.value = await getSingleFirestoreDocument('users', id.value as string)
		loading.value = false
	}
	return { getProfile, profileData, loading }
}
