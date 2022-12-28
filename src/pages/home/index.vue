
<template>
	<LazyTasksReferralCard />
	<LazyTasksCard v-for="task in tasks" :id="task.id" :key="task.id" :task="task" />
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

await fetchHomeTasks()
console.log(tasks.value)

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
