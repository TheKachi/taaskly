
<template>
	<main />
	<main class="h-full overflow-y-hidden w-full relative">
		<div ref="mapDiv" class="w-full hi  md:rounded-lg z-20 bg-slate-600 relative" />
		<div class="fixed md:absolute bg-white border px-4 py-3 bottom-0 md:bottom-4  right-0 md:right-4 left-0 md:left-auto md:rounded-xl z-50 ">
			<button class=" btn-primary px-10 w-full">
				Create a Task
			</button>
		</div>
	</main>
</template>

<script lang="ts" setup>
import { initMap } from '@/composables/location/useMap'

const mapDiv = ref(null)
onMounted(async () => {
	initMap(mapDiv)
	})
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
