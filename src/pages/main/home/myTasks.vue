<template>
	<LazyTasksReferralCard />
	<TasksLoadingCard v-if="taskloading" />
	<div v-else>
		<TasksMyCard v-for="task in myTasks" :id="task.id" :key="task.id" :task="task" />
	</div>
</template>

<script setup lang="ts">
import { useFetchHomeTasks } from '@/composables/tasks'
const { taskloading, myTasks } = useFetchHomeTasks()
</script>

<style scoped>

</style>
