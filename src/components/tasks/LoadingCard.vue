<template>
	<article class="flex p-4  border-t border-secondaryLight  cursor-pointer">
		<h1 class="text-4xl font-bold">
			loading...
		</h1>

		<!-- <div class="flex-shrink-0">
			<Avatar :name="task.user.username" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<a href="#" class="text-dark capitalize">{{ task.user.username }}</a>
			</div>
			<div class="flex items-center gap-2">
				<BadgeSmall :name="Number(task.price)==0 ? 'Free': `#${task.price}`" class="bg-black text-white" />
				<BadgeSmall v-for="tag in task.tags" :key="tag" :name="tag" />
			</div>

			<div class="text-[15px] text-gray-700 mt-2">
				{{ task.desc }}
			</div>
			<div class=" text-gray-700 mt-1 flex gap-2">
				<span class="accept-btn text-xs px-0 hover:px-2"> <hand_shake class="w-5" /> Make an Offer</span>
				<span class="share-btn text-xs px-0 hover:px-2" @click.stop="shareCard(task)"> <share class="w-5" /> share</span>
				<span class="flag-btn text-xs px-0 hover:px-2" @click.stop="setFlagTaskId(id)"> <flag class="w-5" /> flag</span>
			</div>
		</div> -->
	</article>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
