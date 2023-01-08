<template>
	<LazyTasksReferralCard />
	<LazyTasksMyCard v-for="task in myTasks" :id="task.id" :key="task.id" :task="task" />
</template>

<script setup lang="ts">
import { useFetchHomeTasks } from '@/composables/tasks'
const { fetchHomeTasks, loading, myTasks } = useFetchHomeTasks()
fetchHomeTasks()
</script>

<style scoped>

</style>
