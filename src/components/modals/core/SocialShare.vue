<template>
	<Modal
		modal="$atts.modal"
		title="Share"
	>
		<div class="flex flex-col h-full gap-6">
			<section class="grid grid-cols-3 gap-4 mt-4 justify-center">
				<button @click="shareToTwitter">
					<twitterIcon class="hover:text-[#1DA1F2] text-[#1DA1F2] sm:text-light" />
				</button>
				<button @click="shareToWhatsapp">
					<whatsappIcon class="hover:text-[#25D366] text-[#25D366] sm:text-light" />
				</button>
				<button @click="shareToWhatsapp">
					<facebookIcon class="hover:text-[#3B5998] text-[#3B5998] sm:text-light" />
				</button>
			</section>

			<section class="flex flex-col mt-6 gap-2">
				<p class="font-bold text-lg">
					Or copy link
				</p>
				<div class="border border-dark rounded-md px-3 py-2 flex items-center  justify-between w-full">
					<span class="w-9/12 truncate">	https://www.linkgoeshere.com/promo</span>

					<button class="btn" @click="copyToClipboard">
						Copy
					</button>
				</div>
			</section>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import twitterIcon from '@/assets/images/social/twitter.vue'
import whatsappIcon from '@/assets/images/social/whatsapp.vue'
import facebookIcon from '@/assets/images/social/facebook.vue'
import Modal from '@/components/core/modal/Modal.vue'
import { useSocialShare } from '@/composables/utils/share'
const { copyToClipboard, shareToTwitter, shareToWhatsapp } = useSocialShare()
</script>

<style scoped lang='scss'>
.btn{
	@apply flex items-center font-semibold  border-2
	  border-primary text-primary  hover:scale-105
	  transite duration-200  py-2 px-4 rounded-md;
	  &:hover{
		@apply bg-primary text-light;
	  }
}
button{
	@apply center
}
/* button{
	@apply rounded-md px-6 py-2.5 flex items-center disabled:bg-gray-500 box-border h-11 font-semibold text-white w-full justify-start
} */
</style>
