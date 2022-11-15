<template>
	<Modal
		modal="$atts.modal"
		title="Sign Out"
	>
		<p class="text-primary text-lg tracking-[0.1rem] text-center">
			Are you sure you want to sign out?
		</p>

		<div class="grid grid-cols-2 gap-4">
			<button class="modal-btn" @click="useAuthModal().closeLogout()">
				No
			</button>
			<button class="modal-btn bg-red" @click="signOut">
				Yes
			</button>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import { useAuthModal } from '@/composables/core/modals'
import { useSignin } from '@/composables/auth/auth'
import Modal from '@/components/core/modal/Modal.vue'

const { signOut, loading } = useSignin()

</script>

<style>

</style>
