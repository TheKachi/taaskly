import { useShare, useClipboard } from '@vueuse/core'
import { useAlert } from '@/composables/core/useNotification'

const source = ref('')
const { copy } = useClipboard({ source })
const { share, isSupported } = useShare()

const copyLink = () => {
	copy()
	useAlert().openAlert({
		type: 'Alert',
		msg: 'Seems something went wrong while trying to share, don\'t worry we copied it to your clipboard'
	}
	)
}

export const useShareUtil = () => {
	const shareData = (data: any) => {
		if (location) {
			source.value = `${location.href}/${data.id}`
		}

		if (!isSupported) {
			copyLink()
		}
		try {
			share({
				title: data.value.title,
				text: data.value.desc,
				url: source.value
			})
		} catch {
			copyLink()
		}
	}

	return { shareData }
}
