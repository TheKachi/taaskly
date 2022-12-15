<template>
	<article v-for="n in 10" :key="n" class="flex p-4  border-t border-secondary shadow cursor-pointer" @click="$router.push(`/tasks/${n}`)">
		<div class="flex-shrink-0">
			<Avatar name="kromate" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a href="#" class="text-primary">Kromate</a>
			</div>
			<div class="flex items-center gap-2">
				<BadgeSmall name="Physical" />
				<BadgeSmall name="Errand" />
				<BadgeSmall name="Pickup" />
			</div>

			<div class="text-[15px] text-gray-700 mt-2">
				I need someone to help me get a package from new hall Jumia pickup center and deliver it to me
			</div>
			<div class="text-[15px] text-gray-700 mt-1 flex gap-2">
				<span class="accept-btn"> <icon name="hand_shake" class="w-5" /> Accept</span>
				<span class="share-btn" @click.stop="useCoreModal().openSocialShare()"> <icon name="share" class="w-5" /> share</span>
				<span class="flag-btn"> <icon name="flag" class="w-5" /> flag</span>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useCoreModal } from '@/composables/core/modals'
</script>

<style scoped>
.accept-btn{
@apply text-sm text-primary font-bold flex items-center pl-0 gap-2 hover:bg-primary hover:text-white hover:px-3 py-1 rounded transite;
}
.share-btn{
	@apply text-base text-secondary font-bold flex items-center gap-2 hover:bg-secondary hover:text-white px-3 py-1 rounded transite
}
.flag-btn{
	@apply text-base text-red font-bold flex items-center gap-2 hover:bg-red hover:text-white px-3 py-1 rounded transite
}
</style>
