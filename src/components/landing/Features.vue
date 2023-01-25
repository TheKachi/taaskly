<template>
	<section class="flex flex-col gap-14">
		<h1 class="font-black mt-32 text-center md:text-6xl text-4xl ">
			Features
		</h1>

		<article v-for="n in features" :key="n.title" class=" border-y-2 border-dark   flex flex-col lg:flex-row items-center gap-[52px]">
			<!-- <img src="/hero.png" alt="hero" class="border-2 p-5 border-dark rounded-2xl w-1/2"> -->
			<div class="center w-full px-4 py-8 text-center md:text-start">
				<div class="flex flex-col justify-between items-center md:items-start gap-8 md:max-w-[492px]">
					<h1 class="text-[64px] font-black leading-[76.8px]">
						{{ n.title }}
					</h1>

					<p class="text-lg md:text-2xl font-medium ">
						we do this by providing you access to <b>Individuals</b> , <b>services</b>  and <b>shops</b>  around you that can help you get basically anything you want done
					</p>

					<button class="btn bg-dark text-light h-11 w-fit px-10">
						<span>Learn More</span>
					</button>
				</div>
			</div>

			<img src="/common.png" alt="hero" class="lg:w-1/2 hidden md:block h-full ">
		</article>
	</section>
</template>

<script setup lang="ts">
const features = ref([
	{ title: 'Post and Accept Tasks' },
	{ title: 'Find services around you' },
	{ title: 'Find shops around you' }
])
</script>

<style scoped>
article:nth-child(odd){
	@apply flex-row-reverse
}
h1 {
        font-size: clamp(36px, 9vw, 50px);
        font-weight: 900;
		line-height: clamp(40px, 8vw, 75px) ;
    }
</style>
