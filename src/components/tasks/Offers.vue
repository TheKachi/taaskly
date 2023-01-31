<template>
	<div id="offers" class="flex flex-col">
		<article v-for="n in 5" :key="n" class="flex p-4 cursor-pointer border">
			<div class="flex-shrink-0">
				<Avatar v-if="offer.user" :name="offer.user.username" />
			</div>
			<div class="ml-4 flex flex-col items-start w-full">
				<div class="text-lg font-bold justify-between flex items-center w-full">
					<a v-if="offer.user" href="#" class="text-primary">{{ offer.user.username }}</a>
					<span v-if="mine">{{ convertToCurrency(offer.price) }}</span>
				</div>

				<div class="text-[15px] border border-dark mt-2 bg-gray-100 w-full p-2 rounded">
					{{ offer.offerMsg }}
				</div>
				<div v-if="mine" class=" text-gray-700 mt-1 flex gap-2">
					<button class="my-share-btn text-xs px-0 hover:px-2" @click.stop="shareCard(task)">
						Accept Offer
					</button>
					<button class="flag-btn text-xs px-0 hover:px-2" @click="setDeleteTaskId(id)">
						Decline Offer
					</button>
				</div>
			</div>
		</article>
	</div>
</template>

<script setup lang="ts">
import { convertToCurrency } from '@/composables/utils'

const props = defineProps({
	mine: {
		type: Boolean,
		required: true,
		default: false
	},

	offer: {
		type: Object,
		required: true,
		default: () => {}
	}
})
</script>

<style scoped>

</style>
