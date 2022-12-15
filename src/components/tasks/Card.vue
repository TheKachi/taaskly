<template>
	<article v-for="n in 10" :key="n" class="flex p-4  border-t border-secondary shadow cursor-pointer" @click="$router.push(`/tasks/${n}`)">
		<div class="flex-shrink-0">
			<Avatar name="kromate" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a href="#" class="text-primary hover:text-teal-600">Kromate</a>
			</div>
			<BadgeSmall name="Errand" class="!bg-black" />
			<div class="text-[15px] text-gray-700 mt-2">
				I need someone to help me get a package from new hall Jumia pickup center and deliver it to me
			</div>
			<div class="text-[15px] text-gray-700 mt-3 flex gap-4">
				<span class="text-sm text-primary font-bold flex items-center gap-2 hover:bg-primary hover:text-white px-3 py-1 rounded transite"> <icon name="hand_shake" class="w-5" /> Accept</span>
				<span class="text-base text-secondary font-bold" @click.stop="useCoreModal().openSocialShare()">share</span>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useCoreModal } from '@/composables/core/modals'
</script>

<style scoped>

</style>
