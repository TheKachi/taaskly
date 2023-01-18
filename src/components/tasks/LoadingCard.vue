<template>
	<article v-for="n in 3" :key="n" class="flex p-4  border-t border-secondaryLight  cursor-pointer">
		<!-- <h1 class="text-4xl font-bold">
			loading...
		</h1> -->

		<div class="flex-shrink-0">
			<Skeleton radius="90px" height="36px" width="36px" />
			<!-- <Avatar :name="task.user.username" /> -->
		</div>
		<div class="ml-4 flex flex-col items-start w-full">
			<div class="text-lg font-bold">
				<Skeleton radius="1px" height="23px" width="80px" />
				<!-- <a href="#" class="text-dark capitalize">{{ task.user.username }}</a> -->
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
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
