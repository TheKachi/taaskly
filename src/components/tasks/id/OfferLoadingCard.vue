<template>
	<article v-for="n in count" :key="n" class="flex p-4  border-b border-dark  cursor-pointer">
		<div class="flex-shrink-0">
			<Skeleton radius="90px" height="36px" width="36px" />
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<Skeleton radius="1px" height="23px" width="80px" />
			</div>

			<div class="text-[15px] text-gray-700 mt-2 w-full gap-3 flex flex-col">
				<Skeleton radius="1px" height="20px" width="100%" />
				<Skeleton radius="1px" height="20px" width="60%" />
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
defineProps({
	count: {
		type: Number,
		default: 3,
		required: false
	}
})
</script>

<style scoped>

</style>
