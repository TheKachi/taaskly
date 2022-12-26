
<template>
	<LazyTasksCard v-for="n in 10" :id="n" :key="n" />
	<button
		class="menu-btn  items-center font-semibold shadow-lg  border border-black bg-secondary !text-white fixed bottom-4 right-6 mobile"
		@click="useTaskModal().openCreateTask()"
	>
		<icon name="task" class="mr-4 w-5 text-white" />
		<p class="text-base">
			Create Task
		</p>
	</button>
</template>

<script lang="ts" setup>
import { useTaskModal } from '@/composables/core/modals'
import { useFetchHomeTasks } from '@/composables/tasks'
const { fetchHomeTasks, loading, tasks } = useFetchHomeTasks()
fetchHomeTasks()

definePageMeta({
	layout: 'home-with-header',
	middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped lang="scss">
.menu-btn {
	@apply text-primary w-[190px] h-11 px-6 text-sm duration-[10ms] rounded mt-1;
}
</style>
