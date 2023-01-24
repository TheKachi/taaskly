
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
    char = String.fromCharCode((char - 65 + key) % 26 + 65).toLocaleLowerCase()
    result += char
  }
  return result
}

export const convertToCurrency = (value: number) => {
  return new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN'
}).format(value)

  // value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export const formatTime = (dateData: string) => {
	const date = new Date(dateData)
	const d = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000)

    const offset = date.getTimezoneOffset() / 60
    const hours = date.getHours()
    d.setHours(hours - offset)

	const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
	const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
	const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
	const hour = new Intl.DateTimeFormat('en', {
		hour: '2-digit',
		timeZone: 'GMT'
	}).format(d)
	let minute = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(d)
	if (minute.length === 1) {
		minute = `0${minute}`
	}
	return {
		date: `${month} ${day}, ${year}`,
		time: `${hour.split(' ')[0]} : ${minute} ${hour.split(' ')[1]}`
	}
}
