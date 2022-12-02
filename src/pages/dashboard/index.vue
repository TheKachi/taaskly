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
import tasks from '@/pages/dashboard/Tasks.vue'
import services from '@/pages/dashboard/Services.vue'
import shops from '@/pages/dashboard/Shops.vue'

const selected = ref('tasks')
const tabViews = ['tasks', 'shops', 'services']
const tabs = markRaw({
	tasks,
	services,
	shops
})

definePageMeta({
	layout: 'dashboard',
	middleware: ['is-authenticated', 'has-profile']
})
</script>
