
<template>
	<Head>
		<Title>Taaskly - {{ $route.params.id }}</Title>
		<Meta name="description" content="My app description" />
	</Head>
	<!-- ========================================================================== -->
	<div>
		<TasksIdLoadingCard v-if="loading" :count="1" />
		<div v-else>
			<TasksIdCard :id="taskIdDetails.id" :key="taskIdDetails.id" :task="taskIdDetails" />
		</div>

		<TasksIdOfferLoadingCard v-if="offerLoading" :count="3" />
		<div v-else>
			<TasksIdOffers v-for="offer in offers" :key="offer.id" :offer="offer" />
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
