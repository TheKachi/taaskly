import { User } from 'firebase/auth'
import { useUser } from '@/composables/auth/user'
import { googleAuth, signOutUser } from '@/firebase/auth'
import { useLoading } from '~~/src/composables/core/useNotification'

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
		}
	}
	return { createProfile, formStep, profileFormState, loading }
}
