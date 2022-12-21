<template>
	<input
		id="autocomplete"
		ref="autocompleteInput"
		type="text"
		placeholder="Enter the Location for this Task"
		class="input-field"
		required
	>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
  const options = {
    fields: ['formatted_address', 'geometry', 'name'],
    strictBounds: false,
    types: ['establishment']
  }
    const autocompleteInput = ref(null)
onMounted(() => {
    const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY, libraries: ['places'] })
loader.load().then(() => {
    const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete') as HTMLInputElement,
        options
    )
})
    })

</script>

<style scoped>

</style>
