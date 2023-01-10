<template>
	<Modal
		modal="$atts.modal"
		title="Share Task"
	>
		<section class="flex flex-col gap-4">
			<lottie-player
				id="checkmark"
				background="transparent"
				:src="JSON.stringify(bank_animation)"
				speed="1"
				autoplay
				loop
				class="max-w-lg lg:w-full w-9/12"
			/>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
</script>
