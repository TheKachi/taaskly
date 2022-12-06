
<template>
	<main class="h-screen">
		<div ref="mapDiv" class="w-full hi md:h-full rounded-lg z-20 bg-slate-600 relative" />
		<div class="absolute bg-primary p-4 bottom-4 right-4 rounded-xl z-50 border-2 border-black">
			<button class="bg-white btn px-10">
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

<style scoped>
.hi{
	height:calc(100% - 64px)
}
</style>
