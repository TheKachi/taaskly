import { useUser } from '@/composables/auth/user'

export default function hasProfile(route: any) {
	if (useUser().username.value) {
		return navigateTo('/main/home')
	}
}
