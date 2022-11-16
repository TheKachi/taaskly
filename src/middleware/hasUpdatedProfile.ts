import { useUser } from '@/composables/auth/user'

export default function isAuthenticated(route: any) {
    console.log(useUser().user)
	if (!useUser().isLoggedIn.value) {
		return navigateTo('/auth/login')
	}
}
