
<template>
	<section class="mt-12">
		<h1 class="page-title">
			Wallet Balance
			<!-- Level - {{ profileData?.student ? 'Student' : 'Individual' }} -->
		</h1>

		<h2 class="text-6xl font-bold text-light_primary">
			NGN 0.00
			<!-- NGN **** -->
		</h2>

		<div class="grid grid-cols-2 gap-4 max-w-full w-96 mt-9">
			<button class="btn-primary" @click="fundWallet">
				Fund
			</button>
			<button class="btn-primary" disabled>
				Withdraw
			</button>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useWallet } from '@/composables/wallet/index'
const { fundWallet, loading } = useWallet()
</script>

<style scoped>

</style>
