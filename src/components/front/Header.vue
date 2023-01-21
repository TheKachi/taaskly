<template>
	<div class="front-header">
		<img
			class="w-36 h-36 object-fit border-2 border-dark rounded-full p-1"
			src="/logo.svg"
			alt="service profile image"
		>

		<div class=" flex flex-col gap-2">
			<h2 class="text-3xl font-bold">
				Taaskly Demo
			</h2>
			<p class="text-gray-700">
				This is the Taaskly demo front for both services and shops where individuals can sell both their services and products.
			</p>
			<div class="flex items-center gap-2.5 w-full justify-center md:justify-start">
				<BadgeSmall name="Instagram" class="bg-[#C13584] text-light pill" />
				<BadgeSmall name="Twitter" class="bg-[#1DA1F2] text-light pill" />
				<BadgeSmall name="Facebook" class="bg-[#4267B2] text-light pill" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// facebook blue hash code #4267B2

</script>

<style scoped>
.pill{
	@apply border-none  !px-[0.75rem] !py-[0.25rem]
}

.front-header{
	@apply flex flex-col md:flex-row gap-6 items-center md:items-start justify-center py-10 px-4 w-full text-center md:text-left md:rounded-md shadow md:border border-dark md:mt-12
}
</style>
