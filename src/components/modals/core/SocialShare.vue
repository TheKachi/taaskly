<template>
	<Modal
		modal="$atts.modal"
		title="Share"
	>
		<section class="grid grid-cols-3 gap-4">
			<button @click="shareToTwitter">
				<twitterIcon class="hover:text-[#1DA1F2] text-[#1DA1F2] sm:text-light" />
			</button>
			<button @click="shareToWhatsapp">
				<whatsappIcon class="hover:text-[#25D366] text-[#25D366] sm:text-light" />
			</button>
			<button class="bg-[#1DA1F2]" @click="shareToTwitter">
				<icon class="w-6 mr-2" name="twitter" />
				Twitter
			</button>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import twitterIcon from '@/assets/images/social/twitter.vue'
import whatsappIcon from '@/assets/images/social/whatsapp.vue'
import Modal from '@/components/core/modal/Modal.vue'
import { useSocialShare } from '@/composables/utils/share'
const { copyToClipboard, shareToTwitter, shareToWhatsapp } = useSocialShare()
</script>

<style scoped>
button{
	@apply rounded-md px-6 py-2.5 flex items-center disabled:bg-gray-500 box-border h-11 font-semibold text-white w-full justify-start
}
</style>
