import { useShare, useClipboard } from '@vueuse/core'
import { CopyToClipboardCopyDataType, shareDataType } from './types/share'
import { useAlert } from '@/composables/core/useNotification'

const source = ref('')
const { share, isSupported } = useShare()

export const copyToClipboard = () => {
	// console.log('called')
	const source = ref('')

	const { copy, copied, isSupported } = useClipboard({ source })

	const copyData = (copyDataObj:CopyToClipboardCopyDataType) => {
		if (!isSupported) return useAlert().openAlert({ type: 'ERROR', msg: 'Seems like your device doesn\'t clipboarding' })
		source.value = copyDataObj.info
		copy()
		if (copied) return useAlert().openAlert({ type: 'SUCCESS', msg: copyDataObj.msg })
	}

	return { copyData }
}

export const useShareUtil = () => {
	const shareData = (shareDataObj: shareDataType) => {
		// console.log('called')
		if (!isSupported) {
			// console.log('called')
			copyToClipboard().copyData({ info: shareDataObj.url, msg: 'Link copied to clipboard' })
		}
		try {
			share({ title: shareDataObj.title, text: shareDataObj.desc, url: shareDataObj.url })
		} catch {
			copyToClipboard().copyData({ info: source.value, msg: 'Link copied to clipboard' })
		}
	}

	return { shareData }
}
