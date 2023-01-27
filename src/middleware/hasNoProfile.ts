import { useUser } from '@/composables/auth/user'

export default function hasNoProfile(route: any) {
	if (process.client) {
		if (!useUser().hasAProfile.value) {
			return navigateTo('/auth/profile')
		}
	}
}
