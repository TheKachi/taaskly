<template>
	<main class="w-full h-screen">
		<div
			class=""
		>
			<LazyTabs :selected="selected" :tabs="tabViews" @changed="selected = $event" />
			<keep-alive>
				<component :is="tabs[selected]" />
			</keep-alive>
		</div>
	</main>
</template>

<script lang="ts" setup>
import { useSignin } from '@/composables/auth/auth'
import { useUser } from '@/composables/auth/user'
import Verification from '@/pages/profile/-Verification.vue'
import Account from '@/pages/profile/-Account.vue'
const { googleSignin, signOut } = useSignin()
const { isLoggedIn, user } = useUser()

const selected = ref('Account')
const tabViews = ['Account', 'Verification']

const tabs = markRaw({
	Verification,
	Account
})

definePageMeta({
	layout: 'dashboard'
})
</script>
