import { useAlert } from '@/composables/core/useNotification'
export const playSound = (url:any) => {
    const audio = new Audio(url)
    audio.play()
}

const beforeUnloadListener = (event:Event) => {
    event.preventDefault()
    // return event.returnValue = 'You are About to leave the room, automatic forfeit'
}

export const disableReload = () => {
    addEventListener('beforeunload', beforeUnloadListener, { capture: true })
}
export const enableReload = () => {
    removeEventListener('beforeunload', beforeUnloadListener, { capture: true })
}
export const toBase64 = (file:Blob) => new Promise((resolve, reject) => {
	const reader = new FileReader()
	reader.readAsDataURL(file)
	reader.onload = () => resolve(reader.result)
	reader.onerror = (error) => reject(error)
})

export const copyToClipboard = () => {
	const source = ref('')

	const { copy, copied, isSupported } = useClipboard({ source })

	const copyData = (data: any, msg: string) => {
		if (!isSupported) return useAlert().openAlert({ type: 'ERROR', msg: 'Seems like your device doesn\'t clipboarding' })
		source.value = data
		copy()
		if (copied) return useAlert().openAlert({ type: 'SUCCESS', msg })
	}

	return { copyData }
}
