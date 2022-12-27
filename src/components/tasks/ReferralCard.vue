<template>
	<article class="flex p-4  border-t border-secondaryLight  cursor-pointer" @click="$router.push(`/tasks/referrals`)">
		<div class="flex-shrink-0">
			<Avatar name="Taaskly" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a href="#" class="text-primary">Taaskly</a>
			</div>
			<div class="flex items-center gap-2">
				<BadgeSmall name="Online" />
				<BadgeSmall name="System" />
				<BadgeSmall name="Referrals" />
			</div>

			<div class="text-[15px] text-gray-700 mt-2">
				Refer your friends to use taaskly and earn <b>5%</b>  of their earnings. Terms and conditions apply
			</div>
			<div class=" text-gray-700 mt-1 flex gap-2">
				<span class="accept-btn text-xs px-0 hover:px-2"> <icon name="hand_shake" class="w-5" />Generate referral link</span>
				<span class="share-btn text-xs px-0 hover:px-2" @click.stop="useCoreModal().openSocialShare()"> <icon name="share" class="w-5" /> share</span>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useCoreModal } from '@/composables/core/modals'
defineProps({

})
</script>

<style scoped>

</style>
