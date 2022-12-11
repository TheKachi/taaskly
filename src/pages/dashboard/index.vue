
<template>
	<main class="flex-col flex items-stretch overflow-y-auto pt-16">
		<TopbarDefaultTopbar />
		<LazyTasksCard />
	</main>
</template>

<script lang="ts" setup>
import { useCoreModal } from '@/composables/core/modals'

definePageMeta({
	layout: 'dashboard'
	// middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped lang="scss">

</style>
