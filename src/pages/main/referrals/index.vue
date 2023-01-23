
<template>
	<main class="p-4 flex flex-col gap-3">
		<h1 class="text-base font-medium">
			Below are the list of people that have signed up using your referral link
		</h1>
		<section class="flex flex-col">
			<article v-for="referral in referrals" :key="referral.id">
				{{ referral.created_at }} - {{ referral.username }}
			</article>
		</section>
	</main>
</template>

<script setup lang="ts">
import { useReferrals } from '@/composables/core/referrals'
const { fetchReferral, loading, referrals } = useReferrals()

onMounted(() => {
	fetchReferral()
})
definePageMeta({
	layout: 'main-default',
	middleware: ['is-authenticated', 'has-no-profile']
})
</script>

<style scoped>

</style>
