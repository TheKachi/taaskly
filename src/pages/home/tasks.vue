<template>
	<LazyTasksReferralCard />
	<LazyTasksCard v-for="task in tasks" :id="task.id" :key="task.id" :task="task" />
</template>

<script setup lang="ts">
import { useFetchHomeTasks } from '@/composables/tasks'
const { fetchHomeTasks, loading, tasks } = useFetchHomeTasks()
fetchHomeTasks()
</script>

<style scoped>

</style>
