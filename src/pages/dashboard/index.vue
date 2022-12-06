
<template>
	<main class="h-full overflow-y-hidden w-full relative">
		<div ref="mapDiv" class="w-full hi  rounded-lg z-20 bg-slate-600 relative" />
		<div class="absolute bg-primary p-3 bottom-[86px] md:bottom-4  right-4 left-4 md:left-auto rounded-xl z-50 border-2 border-black">
			<button class="bg-white btn px-10 w-full">
				Create a Task
			</button>
		</div>
	</main>
</template>

<script lang="ts" setup>
import { initMap } from '@/composables/location/useMap'

const mapDiv = ref(null)
onMounted(initMap(mapDiv))
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
