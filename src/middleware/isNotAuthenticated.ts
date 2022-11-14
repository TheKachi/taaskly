import { useUser } from '@/composables/auth/user'

export default function isNotAuthenticated(route:any) {
	if (useUser().isLoggedIn.value) {
		return navigateTo('/dashboard')
	}
}
