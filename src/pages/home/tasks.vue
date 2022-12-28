<template>
	<LazyTasksReferralCard />
	<LazyTasksCard v-for="task in homeTasks" :id="task.id" :key="task.id" :task="task" />
</template>

<script setup lang="ts">
import { useFetchHomeTasks } from '@/composables/tasks'
const { fetchHomeTasks, loading, homeTasks } = useFetchHomeTasks()
fetchHomeTasks()
</script>

<style scoped>

</style>
