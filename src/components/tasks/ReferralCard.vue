<template>
	<article class="card-body" @click="$router.push(`/main/referrals`)">
		<div class="flex-shrink-0">
			<Avatar name="Taaskly" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a href="#" class="text-dark">Taaskly</a>
			</div>
			<div class="flex items-center gap-2">
				<BadgeSmall name="3%" class="bg-black text-white" />
				<BadgeSmall name="Online" />
				<BadgeSmall name="System" />
				<BadgeSmall name="Referrals" />
			</div>

			<div class="text-[15px] text-gray-700 mt-2">
				Refer your friends to use taaskly and earn <b>3%</b>  of their earnings. Terms and conditions apply
			</div>
			<div class=" text-gray-700 mt-1 flex gap-2">
				<span class="accept-btn text-xs px-0 hover:px-2" @click.stop="useCoreModal().openReferral()"> <handShakeIcon class="w-5" />Generate referral link</span>
				<span class="share-btn text-xs px-0 hover:px-2" @click.stop="shareCard()"> <share class="w-5" /> share</span>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useCoreModal } from '@/composables/core/modals'
import { encryptString } from '@/composables/utils'
import handShakeIcon from '@/assets/icons/src/hand_shake.vue'
import share from '@/assets/icons/src/share.vue'
import { useShareUtil } from '@/composables/utils/share'
import { cardReferralMsg } from '@/composables/utils/content'
import { useUser } from '@/composables/auth/user'
const { shareData } = useShareUtil()

const { username } = useUser()
const encodedName = encryptString(username.value)

const shareCard = (task) => {
	shareData({
		title: 'Join me on Taaskly',
		text: cardReferralMsg.value,
		url: `${location.host}/auth/register/?refer=${encodedName}`
	})
}
</script>

<style scoped>

</style>
