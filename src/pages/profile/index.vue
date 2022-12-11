<template>
	<main class="w-full h-screen">
		<div>
			<LazyTabs :selected="selected" :tabs="tabViews" @changed="updateTab($event)" />
			<keep-alive>
				<component :is="tabs[selected]" />
			</keep-alive>
		</div>
	</main>
</template>

<script lang="ts" setup>
import { useSignin } from '@/composables/auth/auth'
import { useUser } from '@/composables/auth/user'
import verification from '@/pages/profile/Verification.vue'
import account from '@/pages/profile/Account.vue'
const { googleSignin, signOut } = useSignin()
const { isLoggedIn, user } = useUser()

const selected = ref('account')
const tabViews = ['account', 'verification']

const tabs = markRaw({
	verification,
	account
})
const updateTab = (data) => {
useRouter().push({ query: { q: data } })
	useRoute().query.q = data
	selected.value = data
}
onMounted(() => {
if (useRoute().query.q && (selected.value = useRoute().query.q)) {
	selected.value = useRoute().query.q
}
})

definePageMeta({
	layout: 'home',
	middleware: ['is-authenticated', 'has-profile']
})
</script>
