<template>
	<section class="flex items-start justify-between mt-6 gap-12 px-2.5 lg:px-0 w-full ">
		<FrontReviewRatings />
		<div class="flex flex-col border border-dark rounded-md ">
			<article v-for="n in 4" :key="n" class="flex p-4     cursor-pointer">
				<div class="flexflex-shrink-0">
					<Avatar name="Zainab" />
				</div>

				<div class="ml-4 flex flex-col items-start w-full">
					<div class="text-lg font-bold flex items-center gap-2 w-full">
						<a href="#" class="text-primary">Zainab</a>
						<div class="h-1 w-1 bg-primary rounded-full" />
						<span class="flex justify-between gap-2 ">
							<icon v-for="n in 5" :key="n" name="star" class="w-3.5" />
						</span>
						<span class="text-sm font-medium ml-auto">January 1, 2023</span>
					</div>

					<div class="text-[15px] mt-2 bg-gray-100 w-full p-2 rounded-md border border-dark">
						This is like the best shop I have ever used from the timely response to the quality of the product. I will definitely be using this shop again.
					</div>
				</div>
			</article>
		</div>
	</section>
</template>

<script setup lang="ts">

</script>
