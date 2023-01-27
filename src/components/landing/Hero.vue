<template>
	<div class="px-4">
		<section class="container border-[3px] border-dark rounded-2xl md:min-h-[550px] mt-14 p-6 py-10 md:p-10 flex flex-col lg:flex-row items-center gap-[52px] px-4">
			<!-- <img src="/hero.png" alt="hero" class="border-2 p-5 border-dark rounded-2xl w-1/2"> -->
			<img src="/hero.png" alt="hero" class="rounded-2xl lg:w-1/2 hidden md:block h-full">

			<article class="flex flex-col justify-between gap-8">
				<h1 class="text-[64px] font-black leading-[76.8px]">
					Everything You need in one place
				</h1>

				<p class="text-lg md:text-2xl font-medium ">
					we do this by providing you access to <b>Individuals</b> , <b>services</b>  and <b>shops</b>  around you that can help you get basically anything you want done
				</p>

				<div class="flex items-center  gap-2 w-full flex-wrap mt-6">
					<button class="btn bg-dark text-light h-11">
						<icon name="post" class="w-5" />
						<span class="ml-2">Post a Job</span>
					</button>
					<button class="btn bg-dark text-light h-11">
						<icon name="search" class="w-5" />
						<span class="ml-2">Find a service</span>
					</button>
					<button class="btn bg-dark text-light h-11">
						<icon name="biz" class="w-5" />
						<span class="ml-2">Find a shop</span>
					</button>
				</div>
			</article>
		</section>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
b{
	@apply text-secondary
}
h1 {
        font-size: clamp(40px, 9vw, 64px);
        font-weight: 900;
		line-height: clamp(40px, 8vw, 75px) ;
    }
</style>
