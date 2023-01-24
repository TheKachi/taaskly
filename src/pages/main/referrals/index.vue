
<template>
	<main class="p-4 flex flex-col gap-3">
		<h1 class="text-base font-medium">
			Below are the list of people that have signed up using your referral link
		</h1>
		<section class="flex flex-col">
			<article v-for="referral in referrals" :key="referral.id">
				{{ referral.created_at }} - {{ referral.username }}
			</article>
			<Table
				class="w-full"
				:loading="loading"
				:headers="headers"
				:table-data="ReferralData"
				:has-options="false"
			/>
		</section>
	</main>
</template>

<script setup lang="ts">
import { useReferrals } from '@/composables/core/referrals'
const { fetchReferral, loading, referrals } = useReferrals()

	const headers = [
			{ text: 'Name', value: 'name' },
			{ text: 'Username', value: 'username' },
			{ text: 'Email', value: 'email' },
			{ text: 'Created at', value: 'created_at' }
		]
const ReferralData = computed({
	get: () => {
		return referrals.value.map((referral) => {
			return {
				name: referral.username,
				email: referral.email,
				phone: referral.phone,
				totalSpent: referral.totalSpent
			}
		})
	}
})
onMounted(async () => {
	await fetchReferral()
	console.log(referrals.value)
})
definePageMeta({
	layout: 'main-default',
	middleware: ['is-authenticated', 'has-no-profile']
})
</script>

<style scoped>

</style>
