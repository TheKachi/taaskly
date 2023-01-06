import { useShare, useClipboard } from '@vueuse/core'
import { CopyToClipboardCopyDataType, shareDataType } from './types/share'
import { useCoreModal } from '@/composables/core/modals'
import { useAlert } from '@/composables/core/useNotification'

const { share, isSupported } = useShare()

export const copyToClipboard = () => {
	const source = ref('')

	const { copy, copied, isSupported } = useClipboard({ source })

	const copyData = (copyDataObj: CopyToClipboardCopyDataType) => {
		console.log('called 2')
		if (!isSupported.value) return useAlert().openAlert({ type: 'ERROR', msg: 'Seems like your device doesn\'t clipboarding' })
		source.value = copyDataObj.info
		copy()
		if (copied) return useAlert().openAlert({ type: 'SUCCESS', msg: copyDataObj.msg })
	}

	return { copyData }
}

export const useShareUtil = () => {
	const shareData = (shareDataObj: shareDataType) => {
		console.log('called 1')
		console.log(isSupported)
		if (!isSupported.value) {
		useCoreModal().openSocialShare()
		}
		try {
			share({ title: shareDataObj.title, text: shareDataObj.desc, url: shareDataObj.url })
		} catch {
			copyToClipboard().copyData({ info: shareDataObj.url, msg: 'Link copied to clipboard' })
		}
	}

	return { shareData }
}
