<template>
	<LazyTasksReferralCard />
	<TasksLoadingCard v-if="homeTasks.length < 1" />
	<div v-else>
		<LazyTasksCard v-for="task in homeTasks" :id="task.id" :key="task.id" :task="task" />
	</div>
</template>

<script setup lang="ts">
import { useFetchHomeTasks } from '@/composables/tasks'
const { fetchHomeTasks, taskloading, homeTasks } = useFetchHomeTasks()
onMounted(fetchHomeTasks)
</script>

<style scoped>

</style>
