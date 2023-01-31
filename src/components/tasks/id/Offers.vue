<template>
	<div id="offers" class="flex flex-col">
		<article class="flex p-4     cursor-pointer">
			<div class="flex-shrink-0">
				<Avatar :name="offer.user.username" />
			</div>
			<div class="ml-4 flex flex-col items-start w-full">
				<div class="text-lg font-bold">
					<a href="#" class="text-primary">{{ offer.user.username }}</a>
				</div>

				<div class="text-[15px] border border-dark mt-2 bg-gray-100 w-full p-2 rounded">
					{{ offer.offerMsg }}
				</div>
			</div>
		</article>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	offer: {
		type: Object,
		requireed: true,
		default: () => {}
	}
})
</script>

<style scoped>

</style>
