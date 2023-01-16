<template>
	<div class="bg-light mt-10 rounded-md shadow-md">
		<div class="flex gap-6 items-center justify-center py-10 px-4 w-9/12">
			<div class="relative border-2 border-dark max-w-[150px] rounded-full">
				<img
					class="p-2 w-full h-full object-cover"
					src="https://files.selar.co/merchant-images/demo/demo-selar.co-20211201075548.png"
					alt="service profile image"
				>
			</div>
			<div class="max-w-[70%] flex flex-col gap-2">
				<h2 class="text-3xl font-medium">
					Taasly Service Demo
				</h2>
				<p class="text-gray-700 md:text-sm ">
					This is a demo account, feel free to make a test payment to see how simple taasly service is....
				</p>
				<div class="icons flex gap-4">
					<Twitter />
					<Twitter />
					<Twitter />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Twitter from '../../../assets/icons/src/twitter.vue'

</script>

<style scoped>

</style>
