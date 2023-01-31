<template>
	<div v-if="type==='default'">
		<article v-for="n in count" :key="n" :class="[inner? 'border-b':'border-t', 'flex p-4   border-dark  cursor-pointer']">
			<div class="flex-shrink-0">
				<Skeleton radius="90px" height="36px" width="36px" />
			</div>
			<div class="ml-4 flex flex-col items-start w-full">
				<div class="text-lg font-bold">
					<Skeleton radius="1px" height="23px" width="80px" />
				</div>
				<div class="flex items-center gap-2 mt-3">
					<Skeleton radius="90px" height="20px" width="50px" />
					<Skeleton radius="90px" height="20px" width="50px" />
					<Skeleton radius="90px" height="20px" width="50px" />
					<Skeleton radius="90px" height="20px" width="50px" />
				</div>

				<div class="text-[15px] text-gray-700 mt-2 w-full gap-3 flex flex-col">
					<Skeleton radius="1px" height="20px" width="100%" />
					<Skeleton radius="1px" height="20px" width="60%" />
				</div>
				<div class="flex gap-2 mt-3">
					<Skeleton radius="3px" height="24px" width="104px" />
					<Skeleton radius="3px" height="24px" width="58px" />
					<Skeleton radius="3px" height="24px" width="55px" />
				</div>
			</div>
		</article>
	</div>
	<div v-if="type==='offer'">
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
	</div>
</template>

<script setup lang="ts">
defineProps({
	type: {
		type: String,
		default: 'default',
		required: false
	},
	inner: {
		type: Boolean,
		default: false,
		required: false
	},
	count: {
		type: Number,
		default: 3,
		required: false
	}
})
</script>

<style scoped>

</style>
