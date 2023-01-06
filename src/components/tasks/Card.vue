<template>
	<article class="flex p-4  border-t border-secondaryLight  cursor-pointer" @click="$router.push(`/tasks/${id}`)">
		<div class="flex-shrink-0">
			<Avatar :name="task.user.username" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a href="#" class="text-night capitalize">{{ task.user.username }}</a>
			</div>
			<div class="flex items-center gap-2">
				<BadgeSmall :name="Number(task.price)==0 ? 'Free': `#${task.price}`" class="bg-black text-white" />
				<BadgeSmall v-for="tag in task.tags" :key="tag" :name="tag" />
			</div>

			<div class="text-[15px] text-gray-700 mt-2">
				{{ task.desc }}
			</div>
			<div class=" text-gray-700 mt-1 flex gap-2">
				<span class="accept-btn text-xs px-0 hover:px-2"> <icon name="hand_shake" class="w-5" /> Make an Offer</span>
				<span class="share-btn text-xs px-0 hover:px-2" @click.stop="shareCard(task)"> <icon name="share" class="w-5" /> share</span>
				<span class="flag-btn text-xs px-0 hover:px-2" @click.stop="setFlagTaskId(id)"> <icon name="flag" class="w-5" /> flag</span>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useCoreModal } from '@/composables/core/modals'
import { useFlagTask } from '@/composables/tasks'
import { useShareUtil } from '@/composables/utils/share'
const { shareData } = useShareUtil()

const shareCard = (task) => {
	shareData({
		title: `${task.user.username}'s task`,
		text: task.desc,
		url: `${location.hostname}/tasks/${task.id}`
	})
}

const { setFlagTaskId } = useFlagTask()

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
