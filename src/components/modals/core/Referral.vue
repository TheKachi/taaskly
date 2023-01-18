<template>
	<Modal
		modal="$atts.modal"
		title="Referral Modal"
	>
		<section class="flex flex-col gap-4 w-full justify-center items-start">
			<p>Your referral ID is </p>
			<span>{{ encodedName }}</span>
			<button class="btn-primary">
				copy referral link
			</button>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import { encryptString } from '../../../composables/utils'
import Modal from '@/components/core/modal/Modal.vue'
import share from '@/assets/animations/share.json'
import { useUser } from '@/composables/auth/user'
const { username } = useUser()

const encodedName = encryptString('Saykeed')
</script>
