
<template>
	<main ref="mapDiv" class="w-full h-full rounded-lg z-20 bg-slate-600 relative">
		<div class="absolute bg-primary p-4 bottom-4 right-4 rounded-xl">
			<button class="bg-white btn">
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
	layout: 'dashboard',
	middleware: ['is-authenticated', 'has-profile']
})
</script>
