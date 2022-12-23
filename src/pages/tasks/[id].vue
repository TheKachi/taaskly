<template>
	<Head>
		<Title>Taaskly - {{ $route.params.id }}</Title>
		<Meta name="description" content="My app description" />
	</Head>
	<!-- ========================================================================== -->
	<div>
		<article v-for="n in 10" :key="n" class="flex p-4  border-t border-secondaryLight  cursor-pointer" @click="$router.push(`/tasks/${n}`)">
			<div class="flex-shrink-0">
				<Avatar name="kromate" />
			</div>
			<div class="ml-4 flex flex-col items-start w-full">
				<div class="text-lg font-bold">
					<a href="#" class="text-primary">Kromate</a>
				</div>
				<div class="flex items-center gap-2">
					<BadgeSmall name="Physical" />
					<BadgeSmall name="Errand" />
					<BadgeSmall name="Pickup" />
				</div>

				<div class="text-[15px] text-gray-700 mt-2">
					I need someone to help me get a package from new hall Jumia pickup center and deliver it to me
				</div>
				<div class="text-[15px] text-gray-700 mt-1 flex gap-2">
					<span class="accept-btn"> <icon name="hand_shake" class="w-5" /> Make an Offer</span>
					<span class="share-btn" @click.stop="useCoreModal().openSocialShare()"> <icon name="share" class="w-5" /> share</span>
					<span class="flag-btn"> <icon name="flag" class="w-5" /> flag</span>
				</div>
			</div>
		</article>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'home'
	// middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
