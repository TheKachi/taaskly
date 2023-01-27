import { useUser } from '@/composables/auth/user'
import { decryptString } from '@/composables/utils'

export default function isNotAuthenticated(route: any) {
	if (process.client) {
			hasReferer()
	if (useUser().isLoggedIn.value) {
		return navigateTo('/main/home')
	}
	}
}

const hasReferer = () => {
		const params = new URLSearchParams(window.location.search)
		const refer = params.get('refer')

		if (refer) {
			localStorage.setItem('taaskly_referral', decryptString(refer))
		}
}
