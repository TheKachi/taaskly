import { useShare, useClipboard } from '@vueuse/core'
import { CopyToClipboardCopyDataType, shareDataType } from './types/share'
import { useCoreModal } from '@/composables/core/modals'
import { useAlert } from '@/composables/core/useNotification'

const { share, isSupported } = useShare()
const globalShareData = ref<shareDataType>()

export const useCopyToClipboard = () => {
	const source = ref('')
	const { copy, copied, isSupported } = useClipboard({ source })

	const copyData = (copyDataObj: CopyToClipboardCopyDataType) => {
		if (!isSupported.value)
			return useAlert().openAlert({
				type: 'ERROR',
				msg: 'Seems like your device doesn\'t clipboarding'
			})
		source.value = copyDataObj.info
		copy()
		if (copied)
			return useAlert().openAlert({ type: 'SUCCESS', msg: copyDataObj.msg })
	}

	return { copyData }
}

export const useShareUtil = () => {
	const shareData = (shareDataObj: shareDataType) => {
		if (!isSupported.value) {
			globalShareData.value = shareDataObj
			useCoreModal().openSocialShare()
		}
		try {
			share({
				title: shareDataObj.title,
				text: shareDataObj.desc,
				url: shareDataObj.url
			})
		} catch {
			useCopyToClipboard().copyData({
				info: shareDataObj.url,
				msg: 'Link copied to clipboard'
			})
		}
	}

	return { shareData }
}

export const useSocialShare = () => {
	const copyToClipboard = (shouldCloseModal = true) => {
		useCopyToClipboard().copyData({
			info: globalShareData!.value!.url,
			msg: 'Link copied to clipboard'
		})
		if (shouldCloseModal) useCoreModal().closeSocialShare()
	}

	const shareToTwitter = (shouldCloseModal = true) => {
		console.log(globalShareData)
		window.open(
			`https://twitter.com/intent/tweet?url=${
				globalShareData!.value!.url
			}&title=check%20out%20this%20task&via=taaskly`,
			'_blank'
		)
		if (shouldCloseModal) useCoreModal().closeSocialShare()
	}

	return { copyToClipboard, shareToTwitter }
}