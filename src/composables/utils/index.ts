
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

export const encryptString = (text, key = 10) => {
  let result = ''
  for (let i = 0; i < text.length; i++) {
    let char = text.charCodeAt(i)
    char = String.fromCharCode((char - 65 + key) % 26 + 65)
    result += char
  }
  return result
}

export const decryptString = (text, key = 10) => {
  let result = ''
  for (let i = 0; i < text.length; i++) {
    let char = text.charCodeAt(i)
    char = String.fromCharCode((char + 65 - key) % 26 + 65)
    result += char
  }
  return result
}
