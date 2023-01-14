import { ref } from '@vue/reactivity'
import { onUnmounted, onMounted } from '@vue/runtime-core'
const options = {
	enableHighAccuracy: true,
	timeout: 15000,
	maximumAge: 0
}

export function useGeolocation() {
	const coords = ref({ latitude: 0, longitude: 0 })
	const isSupported = 'navigator' in window && 'geolocation' in navigator

	let watcher:any
	onMounted(async () => {
		if (isSupported)
			watcher = await navigator.geolocation.watchPosition((position) => { coords.value = position.coords }, error, options)
	})
	onUnmounted(() => {
		if (watcher) navigator.geolocation.lightWatch(watcher)
	})

	return { coords, isSupported }
}

function error(err:any) {
	alert('ERROR(' + err.code + '): ' + err.message)
}
