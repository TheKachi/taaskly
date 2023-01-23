<template>
	<Modal
		modal="$atts.modal"
		title="Share"
	>
		<section class="flex flex-col gap-4">
			<button class=" bg-dark" @click="copyToClipboard">
				<icon class="w-6 mr-2" name="clipboard" />
				Copy to Clipboard
			</button>
			<button class="bg-[#25D366]" @click="shareToWhatsapp">
				<icon class="w-6 mr-2" name="whatsapp_outline" />
				Whatsapp
			</button>
			<button class="bg-[#1DA1F2]" @click="shareToTwitter">
				<icon class="w-6 mr-2" name="twitter" />
				Twitter
			</button>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useSocialShare } from '@/composables/utils/share'
const { copyToClipboard, shareToTwitter, shareToWhatsapp } = useSocialShare()
</script>

<style scoped>
button{
	@apply rounded-md px-6 py-2.5 flex items-center disabled:bg-gray-500 box-border h-11 font-semibold text-white w-full justify-start
}
</style>
