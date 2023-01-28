
<template>
	<Head>
		<Title>Taaskly - {{ $route.params.id }}</Title>
		<Meta name="description" content="My app description" />
	</Head>
	<!-- ========================================================================== -->
	<div>
		<TasksIdCard :id="task.id" :key="task.id" :task="task" />

		<div id="offers" class="flex flex-col">
			<article class="flex p-4     cursor-pointer">
				<div class="flex-shrink-0">
					<Avatar name="Olive" />
				</div>
				<div class="ml-4 flex flex-col items-start w-full">
					<div class="text-lg font-bold">
						<a href="#" class="text-primary">Olive</a>
					</div>

					<div class="text-[15px] border border-dark mt-2 bg-gray-100 w-full p-2 rounded">
						Running tasks is what I am good at. I can pick it up and deliver it to you. Check my service profile to see that I am legit
					</div>
				</div>
			</article>
			<article class="flex p-4     cursor-pointer">
				<div class="flex-shrink-0">
					<Avatar name="John" />
				</div>
				<div class="ml-4 flex flex-col items-start w-full">
					<div class="text-lg font-bold">
						<a href="#" class="text-primary">John</a>
					</div>

					<div class="text-[15px] border border-dark mt-2 bg-gray-100 w-full p-2 rounded">
						Hi, I can help you with this task. I can pick it up and deliver it to you.
					</div>
				</div>
			</article>
			<article class="flex p-4     cursor-pointer">
				<div class="flex-shrink-0">
					<Avatar name="Sebastine" />
				</div>
				<div class="ml-4 flex flex-col items-start w-full">
					<div class="text-lg font-bold">
						<a href="#" class="text-primary">Sebastine</a>
					</div>

					<div class="text-[15px] border border-dark mt-2 bg-gray-100 w-full p-2 rounded">
						I have been running task since I was 2 years old. I can help you with this task. I can pick it up and deliver it to you in less than 30 mins.
					</div>
				</div>
			</article>
		</div>
	</div>
</template>

<script setup lang="ts">

definePageMeta({
	layout: 'main-default'

	// middleware: ['is-authenticated', 'has-no-profile']
})
</script>

<style scoped>

</style>
