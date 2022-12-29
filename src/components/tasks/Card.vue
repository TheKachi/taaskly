<template>
	<article class="flex p-4  border-t border-secondaryLight  cursor-pointer" @click="$router.push(`/tasks/${id}`)">
		<div class="flex-shrink-0">
			<Avatar :name="task.user.username" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a href="#" class="text-primary">{{ task.user.username }}</a>
			</div>
			<div class="flex items-center gap-2">
				<BadgeSmall :name="`#${task.price}`" class="bg-black text-white" />
				<BadgeSmall name="Physical" />
				<BadgeSmall name="Errand" />
				<BadgeSmall name="Pickup" />
			</div>

			<div class="text-[15px] text-gray-700 mt-2">
				{{ task.desc }}
			</div>
			<div class=" text-gray-700 mt-1 flex gap-2">
				<span class="accept-btn text-xs px-0 hover:px-2"> <icon name="hand_shake" class="w-5" /> Make an Offer</span>
				<span class="share-btn text-xs px-0 hover:px-2" @click.stop="useCoreModal().openSocialShare()"> <icon name="share" class="w-5" /> share</span>
				<span class="flag-btn text-xs px-0 hover:px-2"> <icon name="flag" class="w-5" /> flag</span>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useCoreModal } from '@/composables/core/modals'
const props = defineProps({
	id: {
		type: String || Number,
		requireed: true,
		default: ''
	},
	task: {
		type: Object,
		requireed: true,
		default: () => {}
	}
})

</script>

<style scoped>

</style>
