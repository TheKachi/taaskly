
<template>
	<Head>
		<Title>Taaskly - {{ $route.params.id }}</Title>
		<Meta name="description" content="My app description" />
	</Head>
	<!-- ========================================================================== -->
	<div>
		<TasksLoadingCard v-if="loading" :count="1" />
		<div v-else>
			<TasksIdCard :id="taskIdDetails.id" :key="taskIdDetails.id" :task="taskIdDetails" />
		</div>

		<TasksIdOffers />
	</div>
</template>

<script setup lang="ts">
import { useFetchIdTask } from '@/composables/tasks/id'
const { params, query, name } = useRoute()
const { loading, fetchIdTask, taskIdDetails } = useFetchIdTask()

definePageMeta({
	layout: 'main-default'
})
onMounted(() => {
	const id = useRoute().params.id
	fetchIdTask(id)
})
</script>

<style scoped>

</style>
