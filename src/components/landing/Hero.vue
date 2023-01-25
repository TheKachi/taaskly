<template>
	<section class="container border-[3px] border-dark rounded-2xl md:min-h-[550px] mt-14 p-10 flex items-center gap-[52px]">
		<!-- <img src="/hero.png" alt="hero" class="border-2 p-5 border-dark rounded-2xl w-1/2"> -->
		<img src="/hero.png" alt="hero" class="rounded-2xl w-1/2">

		<article class="flex flex-col justify-between">
			<h1 class="text-[64px] font-black leading-[76.8px]">
				Everything You need in one place
			</h1>

			<p class="text-2xl font-medium mt-8">
				we do this by providing you access to Individuals, services and shops around you that can help you get basically anything you want done
			</p>

			<div class="flex items-center mt-16 gap-2">
				<button class="btn bg-dark text-light h-11">
					<icon name="post" class="w-5" />
					<span class="ml-2">Post a Job</span>
				</button>
				<button class="btn bg-dark text-light h-11">
					<icon name="search" class="w-5" />
					<span class="ml-2">Find a service</span>
				</button>
				<button class="btn bg-dark text-light h-11">
					<icon name="post" class="w-5" />
					<span class="ml-2">Post a Job</span>
				</button>
			</div>
		</article>
	</section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
