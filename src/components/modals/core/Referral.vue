<template>
	<Modal
		modal="$atts.modal"
		title="Referral Modal"
	>
		<section class="flex flex-col gap-4 w-full justify-center items-start">
			<p>Your referral ID is your username </p>
			<span>{{ encodedName }}</span>
			<button class="btn-primary">
				copy referral link
			</button>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import share from '@/assets/animations/share.json'

const encodedName = encodeURIComponent($store.state.user.username)
</script>
