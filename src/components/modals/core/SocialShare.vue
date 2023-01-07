<template>
	<Modal
		modal="$atts.modal"
		title="Share Task"
	>
		<section class="flex flex-col gap-4">
			<button class="btn font-semibold bg-slate-800 text-white w-full">
				<span class="w-64 flex items-center">
					<icon class="w-6 mr-2" name="clipboard" />
					Copy to Clipboard
				</span>
			</button>
			<button class="btn font-semibold bg-[#075e54] text-white w-full">
				<icon class="w-6 mr-2" name="whatsapp_outline" />
				Whatsapp
			</button>
			<button class="btn font-semibold bg-[#1DA1F2] text-white w-full">
				<icon class="w-6 mr-2" name="twitter" />
				Twitter
			</button>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
</script>
