<template>
	<LazyTasksReferralCard />
	<TasksLoadingCard v-if="myTasks.length < 1" />
	<div v-else>
		<LazyTasksMyCard v-for="task in myTasks" :id="task.id" :key="task.id" :task="task" />
	</div>
</template>

<script setup lang="ts">
import { useFetchHomeTasks } from '@/composables/tasks'
const { fetchHomeTasks, taskloading, myTasks } = useFetchHomeTasks()
onMounted(fetchHomeTasks)
</script>

<style scoped>

</style>
