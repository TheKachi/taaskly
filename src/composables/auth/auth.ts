import { User } from 'firebase/auth'
import { useProfile } from './profile'
import { useUser } from '@/composables/auth/user'
import { googleAuth, signOutUser } from '~~/src/firebase/auth'
import { useLoading } from '~~/src/composables/core/useNotification'

export const useSignin = () => {
	const loading = ref(false)
	const googleSignin = async () => {
		loading.value = true
		try {
			const user = await googleAuth()
			useUser().setUser(user as User)
			const token = await (useUser() as any)?.user?.auth.currentUser.getIdTokenResult()
			const hasProfile = token?.claims?.hasUpdatedProfile
			const username = token?.claims?.username
			useUser().setProfileStatus(hasProfile)
			useUser().setProfileUsername(username)
			await useProfile().getProfile()
			useRouter().push('/home')
			loading.value = false
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
			if (location) location.reload()
		} catch {
			useLoading().closeLoading()
		}

		useLoading().closeLoading()
	}

	return { googleSignin, signOut, loading }
}
