<template>
	<LazyTasksReferralCard />
	<div>
		<LazyTasksCard v-for="task in homeTasks" :id="task.id" :key="task.id" :task="task" />
	</div>

	<!-- <TasksLoadingCard/> -->
</template>

<script setup lang="ts">
import { TasksLoadingCard } from '../../../../.nuxt/components'
import { useFetchHomeTasks } from '@/composables/tasks'
const { fetchHomeTasks, loading, homeTasks } = useFetchHomeTasks()
 fetchHomeTasks()
</script>

<style scoped>

</style>
