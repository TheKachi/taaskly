
<template>
	<!-- Twitter tweet column with tailwind css -->

	<div class="flex flex-col md:flex-row">
		<div class="w-full md:w-2/3">
			<div class="p-4 bg-white rounded-lg shadow">
				<div class="mb-4 flex items-center">
					<img class="h-10 w-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Avatar of Jonathan Reinink">
					<div class="text-sm">
						<p class="text-black leading-none">
							Jane Doe
						</p>
						<p class="text-grey-dark">
							Aug 18
						</p>
					</div>
				</div>
				<p class="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
				</p>
			</div>
		</div>
		<div class="w-full md:w-1/3">
			<div class="p-4 bg-white rounded-lg shadow">
				<div class="flex items-center">
					<svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
					</svg>
				</div>
			</div>
		</div>
	</div>

	<!-- <main class="h-full overflow-y-hidden w-full relative">
		<div ref="mapDiv" class="w-full hi  md:rounded-lg z-20 bg-slate-600 relative" />
		<div class="fixed md:absolute bg-white border px-4 py-3 bottom-0 md:bottom-4  right-0 md:right-4 left-0 md:left-auto md:rounded-xl z-50 ">
			<button class=" btn-primary px-10 w-full">
				Create a Task
			</button>
		</div>
	</main> -->
</template>

<script lang="ts" setup>

definePageMeta({
	layout: 'dashboard'
	// middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped lang="scss">

.hi{
	height:calc(100% );
	@media (max-width: 640px){
		height:calc(100% - 70px);
	}
}
</style>
