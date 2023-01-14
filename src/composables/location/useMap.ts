
import { computed, ref } from '@vue/reactivity'
import { Loader } from '@googlemaps/js-api-loader'
import { useLoading } from '../core/useNotification'
import { useGeolocation } from './useGeolocation'
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string

const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY, libraries: ['places'] })
export const map = ref()
const autocomplete = ref()

export const currLocation = ref('')
export const currPosition = ref()
export const endLocation = ref({})

const myStyles = [
	{
		featureType: 'poi',
		elementType: 'labels',
		stylers: [
			{ visibility: 'off' }
		]
	}]

export const initMap = async (mapDiv:any) => {
	// useLoading().openLoading()
	const { coords } = useGeolocation()

	const currPos = computed(() => ({
		// lat: 35.219646,
		// lng: 33.374931
		lat: coords.value.latitude,
		lng: coords.value.longitude
	}))
	await loader.load()
	map.value = new (window as any).google.maps.Map(mapDiv.value, {
		// center: { lat: 35.2297654, lng: 33.3246926 },
		center: currPos.value,
		zoom: 16,
		disableDefaultUI: true,
		styles: myStyles
	})

	const checkLoc = setInterval(async () => {
		if (coords.value.latitude || coords.value.longitude) {
			await lightInterval(checkLoc)
			await setMarker(currPos)
			useLoading().closeLoading()
		}
	}, 1000)
}
export const setMarker = async (currPos:any) => {
	const infowindow = new (window as any).google.maps.InfoWindow()
	currPosition.value = currPos.value
	await geocoder(currPos, infowindow)
	await AutoComplete()
}

export const geocoder = async (currPos:any, infowindow:any) => {
	const geocoder = new (window as any).google.maps.Geocoder()
	const data = await geocoder.geocode({ location: currPos.value })
	currLocation.value = data

	try {
		if (data.results[0]) {
			map.value.setZoom(11)
			const marker = new (window as any).google.maps.Marker({
				position: currPos.value,
				map: map.value
			})
			const initialLocation = new (window as any).google.maps.LatLng(currPos.value.lat, currPos.value.lng)
			infowindow.setContent(data.results[0].formatted_address)
			infowindow.open(map, marker)
			map.value!.setCenter(initialLocation)
			map.value!.setZoom(16)
		} else {
			alert('Can\'t find your current location')
		}
	} catch (e) {
		window.alert('Geocoder failed due to: ' + e)
	}
}

export const AutoComplete = async () => {
	await loader.load()

	autocomplete.value = new (window as any).google.maps.places.Autocomplete(
		document.getElementById('autocomplete'),
		{
			fields: ['formatted_address', 'geometry', 'name'],
			bounds: new (window as any).google.maps.LatLngBounds(
				new (window as any).google.maps.LatLng(39.925533, 32.866287)
			)
		}
	)

	autocomplete.value.addListener('place_changed', fillInAddress)
}

const fillInAddress = () => {
	const place = autocomplete.value.getPlace()
	endLocation.value = {
		lat: place.geometry.location.lat(),
		lng: place.geometry.location.lat()
	}
}
