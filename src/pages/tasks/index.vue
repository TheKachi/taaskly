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
import Tasks from '@/pages/tasks/Tasks.vue'
import Services from '@/pages/tasks/Services.vue'

const selected = ref('Tasks')
const tabViews = ['Tasks', 'Services']
const tabs = markRaw({
	Tasks,
	Services
})

definePageMeta({
	layout: 'dashboard',
})
</script>
