<template>
	<Head>
		<Title>Taaskly - {{ $route.params.id }}</Title>
		<Meta name="description" content="My app description" />
	</Head>
	<!-- ========================================================================== -->
	<div>
		<article class="flex p-4  border-b border-secondaryLight  cursor-pointer" @click="$router.push(`/tasks/${n}`)">
			<div class="flex-shrink-0">
				<Avatar name="kromate" />
			</div>
			<div class="ml-4 flex flex-col items-start w-full">
				<div class="text-lg font-bold">
					<a href="#" class="text-primary">Kromate</a>
				</div>
				<div class="flex items-center gap-2">
					<BadgeSmall name="#1000" class="bg-black text-white" />
					<BadgeSmall name="Physical" />
					<BadgeSmall name="Errand" />
					<BadgeSmall name="Pickup" />
				</div>

				<div class="text-[15px] text-gray-700 mt-2">
					I need someone to help me get a package from new hall Jumia pickup center and deliver it to me
				</div>
				<div class=" text-gray-700 mt-1 flex gap-2">
					<span class="accept-btn text-xs px-0 hover:px-2"> <icon name="hand_shake" class="w-5" /> Make an Offer</span>
					<span class="share-btn text-xs px-0 hover:px-2" @click.stop="useCoreModal().openSocialShare()"> <icon name="share" class="w-5" /> share</span>
					<span class="flag-btn text-xs px-0 hover:px-2"> <icon name="flag" class="w-5" /> flag</span>
				</div>
			</div>
		</article>

		<div id="offers" class="flex flex-col">
			<article class="flex p-4     cursor-pointer" @click="$router.push(`/tasks/${n}`)">
				<div class="flex-shrink-0">
					<Avatar name="Olive" />
				</div>
				<div class="ml-4 flex flex-col items-start w-full">
					<div class="text-lg font-bold">
						<a href="#" class="text-primary">Olive</a>
					</div>

					<div class="text-[15px] text-gray-700 mt-2 bg-gray-100 w-full p-2 rounded">
						Running tasks is what I am good at. I can pick it up and deliver it to you. Check my service profile to see that I am legit
					</div>
				</div>
			</article>
			<article class="flex p-4     cursor-pointer" @click="$router.push(`/tasks/${n}`)">
				<div class="flex-shrink-0">
					<Avatar name="John" />
				</div>
				<div class="ml-4 flex flex-col items-start w-full">
					<div class="text-lg font-bold">
						<a href="#" class="text-primary">John</a>
					</div>

					<div class="text-[15px] text-gray-700 mt-2 bg-gray-100 w-full p-2 rounded">
						Hi, I can help you with this task. I can pick it up and deliver it to you.
					</div>
				</div>
			</article>
			<article class="flex p-4     cursor-pointer" @click="$router.push(`/tasks/${n}`)">
				<div class="flex-shrink-0">
					<Avatar name="Sebastine" />
				</div>
				<div class="ml-4 flex flex-col items-start w-full">
					<div class="text-lg font-bold">
						<a href="#" class="text-primary">Sebastine</a>
					</div>

					<div class="text-[15px] text-gray-700 mt-2 bg-gray-100 w-full p-2 rounded">
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

	// middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
