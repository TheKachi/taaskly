<template>
	<Modal
		modal="$atts.modal"
		title="Share Task"
	>
		<section class="flex flex-col gap-4">
			<button class=" bg-night">
				<icon class="w-6 mr-2" name="clipboard" />
				Copy to Clipboard
			</button>
			<button class="bg-[#075e54]">
				<icon class="w-6 mr-2" name="whatsapp_outline" />
				Whatsapp
			</button>
			<button class="bg-[#1DA1F2]">
				<icon class="w-6 mr-2" name="twitter" />
				Twitter
			</button>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
</script>

<style scoped>
button{
	@apply btn font-semibold text-white w-full justify-start
}
</style>
