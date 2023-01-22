<template>
	<div class="w-full md:max-w-[15rem] flex flex-col border border-dark rounded-md gap-2 p-2.5 ">
		<div class="bg-primary text-light py-2 px-4  center-col gap-3">
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

		<div class="flex flex-col items-start ">
			<div class="rater">
				<h5 class="text-base font-medium">
					5
				</h5>
				<icon name="star" class="w-4" />
				<span class="rater-text">(1000)</span>
				<div class="rater-body">
					<div class="bg-primary w-full rater-fill" />
				</div>
			</div>
			<div class="rater">
				<h5 class="text-base font-medium">
					4
				</h5>
				<icon name="star" class="w-4" />
				<span class="rater-text">(10)</span>
				<div class="rater-body">
					<div class="bg-primary w-2/4 rater-fill" />
				</div>
			</div>
			<div v-for="n in 3" :key="n" class="rater">
				<h5 class="text-base font-medium">
					{{ 4 - n }}
				</h5>
				<icon name="star" class="w-4" />
				<span class="rater-text">(0)</span>
				<div class="rater-body">
					<div class="bg-primary w-0 rater-fill" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.rater{
 @apply flex gap-2 items-center justify-between w-full
}
.rater-body{
 @apply w-full border border-dark h-3.5 rounded-full p-0.5 md:max-w-[120px]
}
.rater-fill{
    @apply bg-primary h-full rounded-full
}
.rater-text{
 @apply w-12
}
</style>
