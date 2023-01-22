<template>
	<section class="flex items-start justify-between mt-6 gap-12 px-2.5 lg:px-0 w-full ">
		<div class="w-full md:max-w-[15rem] lg:flex flex-col border border-dark rounded-md gap-2  hidden">
			<div class="bg-primary text-light py-2 px-4  m-2 center-col gap-3">
				<h2 class="text-3xl font-bold ">
					5.0/5
				</h2>
				<span class="flex justify-between gap-2 ">
					<icon v-for="n in 5" :key="n" name="star" class="w-5" />
				</span>
				<p class="font-medium text-base">
					1000 verified reviews
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
