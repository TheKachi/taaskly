<template>
	<article :class="[inner? 'border-b':'border-t hover:border-x-[2.5px]']" class="card-body" @click="showTaskIdDetailsPage(task)">
		<div class="flex-shrink-0">
			<Avatar v-if="task.user" :name="task.user.username" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a v-if="task.user" href="#" class="text-dark capitalize">{{ task.user.username }}</a>
			</div>
			<div class="flex items-center gap-2">
				<BadgeSmall :name="Number(task.price)==0 ? 'Free': `#${task.price}`" class="bg-black text-white" />
				<BadgeSmall v-for="tag in task.tags" :key="tag" :name="tag" />
			</div>

			<div class="text-[15px] text-gray-700 mt-2">
				{{ task.desc }}
			</div>
			<div class=" text-gray-700 mt-1 flex gap-2">
				<span class="accept-btn text-xs px-0 hover:px-2" @click.stop="setTask(task)"> <hand_shake class="w-5" /> Make an Offer</span>
				<span class="share-btn text-xs px-0 hover:px-2" @click.stop="shareCard(task)"> <share class="w-5" /> share</span>
				<span class="flag-btn text-xs px-0 hover:px-2" @click.stop="setFlagTaskId(id)"> <flag class="w-5" /> flag</span>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useCoreModal, useTaskModal } from '@/composables/core/modals'
import { useFlagTask } from '@/composables/tasks'
import { useShareUtil } from '@/composables/utils/share'
import hand_shake from '@/assets/icons/src/hand_shake.vue'
import share from '@/assets/icons/src/share.vue'
import flag from '@/assets/icons/src/flag.vue'
import { cardShareMsg } from '@/composables/utils/content'
import { useOfferTask } from '@/composables/tasks/offer'
import { useTaskIdDetails } from '@/composables/tasks/id'
const { shareData } = useShareUtil()
const { showTaskIdDetailsPage } = useTaskIdDetails()
const { setTask } = useOfferTask()
const shareCard = (task) => {
	shareData({
		title: `${task.user.username}'s task`,
		text: cardShareMsg.value,
		url: `/tasks/${task.id}`
	})
}

const { setFlagTaskId } = useFlagTask()

const props = defineProps({
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
