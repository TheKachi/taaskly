<template>
	<Modal
		modal="$atts.modal"
		title="Referral Modal"
	>
		<section class="flex flex-col gap-4 w-full justify-center items-center">
			<!-- <lottie-player
				id="share"
				background="transparent"
				direction="backward"
				:src="JSON.stringify(share)"
				speed="1"
				autoplay
				class="max-w-[200px]"
			/> -->
			<p>Your referral ID is your username => Kromate</p>
			<button class="btn-primary">
				copy referral link
			</button>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import share from '@/assets/animations/share.json'
</script>
