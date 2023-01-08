<template>
	<main class="w-full h-screen p-5">
		<div class="flex ">
			<LazyTabs :selected="selected" :tabs="tabViews" @changed="selected = $event" />
		</div>
		<keep-alive>
			<component :is="tabs[selected]" />
		</keep-alive>
	</main>
</template>

<script lang="ts" setup>
import Wallet from '@/pages/main/wallet/Wallet.vue'
import History from '@/pages/main/wallet/History.vue'

const selected = ref('Wallet')
const tabViews = ['Wallet', 'History']
const tabs = markRaw({
	Wallet,
	History
})

definePageMeta({
	layout: 'home-with-header',
	middleware: ['is-authenticated', 'has-profile']
})
</script>
