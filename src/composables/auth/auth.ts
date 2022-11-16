import { User } from 'firebase/auth'
import { useUser } from '@/composables/auth/user'
import { googleAuth, signOutUser } from '@/firebase/auth'
import { useLoading } from '~~/src/composables/core/useNotification'

export const useSignin = () => {
	const loading = ref(false)
	const googleSignin = async () => {
		loading.value = true
		try {
			const user = await googleAuth()
			useUser().setUser(user as User)
			const token = await useUser()?.user?.auth.currentUser.getIdTokenResult()
			const hasProfile = token?.claims?.hasUpdatedProfile
			useUser().setProfileStatus(hasProfile)
			loading.value = false
			useRouter().push('/dashboard')
		} catch {
			loading.value = false
		}
	}

	const signOut = async () => {
		loading.value = true
		useLoading().openLoading('Signing You out...😗')
		try {
			await signOutUser()
			useRouter().push('/auth/login')
			location.reload()
		} catch {
			useLoading().closeLoading()
		}

		useLoading().closeLoading()
	}

	return { googleSignin, signOut, loading }
}
