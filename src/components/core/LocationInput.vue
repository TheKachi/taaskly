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
     componentRestrictions: { country: ['NG'] },
    fields: ['address_components', 'geometry', 'name']

}
const autocompleteInput = ref(null)
const autocomplete = ref()
onMounted(() => {
	const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
	const loader = new Loader({
		apiKey: GOOGLE_MAPS_API_KEY,
		libraries: ['places']
	})
    const fillInAddress = () => {
        console.log(autocomplete.value)
	const place = autocomplete.value.getPlace()
	const latlng = {
		lat: place.geometry.location.lat(),
		lng: place.geometry.location.lat()
	}
    console.log(latlng)
}
	loader.load().then(() => {
		autocomplete.value = new google.maps.places.Autocomplete(
			document.getElementById('autocomplete') as HTMLInputElement,
			options
		)
        autocomplete.value.addListener('place_changed', fillInAddress)
	})
})
</script>

<style scoped></style>
