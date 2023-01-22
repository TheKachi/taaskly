<template>
	<Modal
		modal="$atts.modal"
		title="Referral"
	>
		<section class="flex flex-col gap-4 w-full justify-center items-start">
			<p>Your referral ID is <b>{{ encodedName }}</b> </p>

			<button class="btn-primary w-full" @click="copyUrl">
				copy referral link
			</button>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import { encryptString } from '@/composables/utils'
import { useCoreModal } from '@/composables/core/modals'
import { useCopyToClipboard } from '@/composables/utils/share'
import Modal from '@/components/core/modal/Modal.vue'
import share from '@/assets/animations/share.json'
import { useUser } from '@/composables/auth/user'

const { username } = useUser()
const { copyData } = useCopyToClipboard()

const encodedName = encryptString(username.value)

const copyUrl = () => {
	copyData({ info: `${location.host}/auth/register/?refer=${encodedName}`, msg: 'referral link copied to clipboard' })
	useCoreModal().closeReferral()
}

</script>
