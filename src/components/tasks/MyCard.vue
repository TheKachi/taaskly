<template>
	<article :class="[inner? 'border-b':'border-t hover:border-x-[2.5px]']" class="card-body" @click="showMyTaskIdDetailsPage(task)">
		<div class="flex-shrink-0">
			<Avatar v-if="task.user" :name="task.user.username" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a v-if="task.user" href="#" class="text-dark capitalize">{{ task.user.username }}</a>
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
import { useTaskIdDetails } from '@/composables/tasks/id'
const { showMyTaskIdDetailsPage } = useTaskIdDetails()
const { setDeleteTaskId } = useDeleteTask()
const { shareData } = useShareUtil()

const shareCard = (task) => {
	shareData({
		title: `${task.user.username} task`,
		text: task.desc,
		url: `/tasks/${task.id}`
	})
}
defineProps({
	inner: {
		type: Boolean,
		default: false,
		required: false
	},
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
