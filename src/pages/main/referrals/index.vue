
<template>
	<main class="p-4 flex flex-col gap-3">
		<h1 class="text-base font-medium">
			Below are the list of people that have signed up using your referral link
		</h1>
		<section class="flex flex-col overflow-x-auto">
			<Table
				class="w-full"
				:loading="loading"
				:headers="headers"
				:table-data="ReferralData"
				:has-options="false"
			>
				<template #item="{ item }">
					<div v-if="item.created_at">
						{{ formatTime(item.data.created_at).date }} <br>
					</div>
					<div v-else-if="item.amount_earned">
						{{ convertToCurrency(item.data.amount_earned) }} <br>
					</div>
				</template>
			</Table>
		</section>
	</main>
</template>

<script setup lang="ts">
import { useReferrals } from '@/composables/core/referrals'
import { formatTime, convertToCurrency } from '@/composables/utils'
const { fetchReferral, loading, referrals } = useReferrals()

	const headers = ref([
			{ text: 'Name', value: 'name', width: 20 },
			{ text: 'Username', value: 'username', width: 15 },
			{ text: 'Email', value: 'email', width: 25 },
			{ text: 'Created at', value: 'created_at', width: 15 },
			{ text: 'Amount Earned', value: 'amount_earned', width: 25 }
		])

const ReferralData = computed({
	get: () => {
		return referrals.value.map((referral) => {
			return {
				name: referral.name,
				email: referral.email,
				username: referral.username,
				created_at: referral.created_at,
				amount_earned: 0
			}
		})
	}
})
onMounted(async () => {
	await fetchReferral()
})
definePageMeta({
	layout: 'main-default',
	middleware: ['is-authenticated', 'has-no-profile']
})
</script>

<style scoped>

</style>
