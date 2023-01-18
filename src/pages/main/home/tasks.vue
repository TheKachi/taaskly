<template>
	<LazyTasksReferralCard />
	<TasksLoadingCard v-if="taskloading" />
	<div v-else>
		<LazyTasksCard v-for="task in homeTasks" :id="task.id" :key="task.id" :task="task" />
	</div>
</template>

<script setup lang="ts">
import { useFetchHomeTasks } from '@/composables/tasks'
const { taskloading, homeTasks } = useFetchHomeTasks()

</script>

<style scoped>

</style>
