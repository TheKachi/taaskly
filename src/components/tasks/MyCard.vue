<template>
	<article class="flex p-4  border-t border-secondaryLight  cursor-pointer">
		<div class="flex-shrink-0">
			<Avatar :name="task.user.username" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a href="#" class="text-night capitalize">{{ task.user.username }}</a>
			</div>
			<div class="flex items-center gap-2">
				<BadgeSmall :name="Number(task.price)==0 ? 'free': `#${task.price}`" class="bg-black text-white" />
				<BadgeSmall v-for="tag in task.tags" :key="tag" :name="tag" />
			</div>

			<div class="text-[15px] text-gray-700 mt-2">
				{{ task.desc }}
			</div>
			<div class=" text-gray-700 mt-1 flex gap-2">
				<button class="my-share-btn text-xs px-0 hover:px-2" @click.stop="shareCard(task)">
					<icon name="share" class="w-5" /> share
				</button>
				<button class="flag-btn text-xs px-0 hover:px-2" @click="setDeleteTaskId(id)">
					<icon name="delete" class="w-5" /> Delete
				</button>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useCoreModal } from '@/composables/core/modals'
import { useDeleteTask } from '@/composables/tasks'
import { useShareUtil } from '@/composables/utils/share'
const { setDeleteTaskId } = useDeleteTask()
const { shareData } = useShareUtil()

const shareCard = (task) => {
	// console.log(task)
	shareData({
		title: `${task.user.username} task`,
		text: task.desc,
		url: `${location.href}/tasks/${task.id}`
	})
}
defineProps({
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
