<template>
	<main class="w-full h-screen">
		<div class="flex ">
			<LazyTabs :selected="selected" :tabs="tabViews" @changed="selected = $event" />
		</div>
		<keep-alive>
			<component :is="tabs[selected]" />
		</keep-alive>
	</main>
</template>

<script lang="ts" setup>
import Overview from '@/pages/dashboard/Overview.vue'
import Personal from '@/pages/dashboard/Personal.vue'

const selected = ref('Overview')
const tabViews = ['Overview', 'Personal']
const tabs = markRaw({
	Overview,
	Personal
})

definePageMeta({
	layout: 'dashboard',
	middleware: ['is-authenticated', 'has-profile']
})
</script>
