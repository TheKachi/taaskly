
<template>
	<div class="flex w-full py-2 justify-start px-3">
		<LazyTabs :selected="selected" :tabs="tabViews" @changed="updateTab($event)" />
	</div>

	<div class="mb-12">
		<keep-alive>
			<component :is="tabs[selected]" />
		</keep-alive>
	</div>

	<button
		class="menu-btn  items-center font-semibold shadow-lg  border border-black bg-primary !text-white fixed bottom-4 right-6 mobile"
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
import { useTabs } from '@/composables/utils/tabs'
import tasks from '@/pages/main/home/tasks.vue'
import myTasks from '@/pages/main/home/myTasks.vue'
import { useFetchHomeTasks } from '@/composables/tasks'
const { fetchHomeTasks } = useFetchHomeTasks()
const { TabComponents, initTabs, selected, tabViews, updateTab, tabs, onTabMounted } = useTabs()

initTabs(
	'tasks',
	['tasks', 'myTasks'],
	markRaw({ tasks, myTasks })
)

definePageMeta({
	layout: 'main-default',
	middleware: ['is-authenticated', 'has-no-profile']
})

onMounted(() => {
onTabMounted()
fetchHomeTasks()
})

</script>

<style scoped lang="scss">
.menu-btn {
	@apply text-primary w-[190px] h-11 px-6 text-sm duration-[10ms] rounded-md mt-1;
}
</style>
