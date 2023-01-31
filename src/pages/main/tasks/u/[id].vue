
<template>
	<Head>
		<Title>Taaskly - {{ $route.params.id }}</Title>
		<Meta name="description" content="My app description" />
	</Head>
	<!-- ========================================================================== -->
	<div>
		<TasksLoadingCard v-if="loading" :count="1" :inner="true" />
		<div v-else>
			<TasksMyCard :id="taskIdDetails.id" :key="taskIdDetails.id" :task="taskIdDetails" :inner="true" />
		</div>

		<TasksLoadingCard v-if="offerLoading" :count="3" type="offer" />
		<div v-else>
			<TasksOffers v-for="offer in offers" :key="offer.id" :offer="offer" :mine="true" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useFetchIdTask } from '@/composables/tasks/id'
import { useFetchOffers } from '@/composables/tasks/offer'
const { params, query, name } = useRoute()
const { loading, fetchIdTask, taskIdDetails } = useFetchIdTask()
const { fetchOffers, offers, loading: offerLoading } = useFetchOffers()

definePageMeta({
	layout: 'main-default'
})
onMounted(() => {
	const id = useRoute().params.id
	fetchIdTask(id)
	fetchOffers(id)
})
</script>

<style scoped>

</style>
