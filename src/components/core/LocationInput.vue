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
import * as geofire from 'geofire-common'

const props = defineProps({
  modelValue: { type: Object, default: () => {} },
  placeholder: { type: String, default: 'Enter tags' }
})
const emit = defineEmits(['update:modelValue'])

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
	const place = autocomplete.value.getPlace()
	const lat = place.geometry.location.lat()
	const lng = place.geometry.location.lat()

	const latlng = { lat, lng }
	const hash = geofire.geohashForLocation([lat, lng])

    const emitter = {
			geohash: hash,
			location: { name: document.getElementById('autocomplete').value, ...latlng }
	}
    emit('update:modelValue', emitter)
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
