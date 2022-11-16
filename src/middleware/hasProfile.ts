import { useUser } from '@/composables/auth/user'

export default function hasProfile(route: any) {
		if (!useUser().hasAProfile.value) {
			return navigateTo('/auth/profile')
		}
	// }
}
