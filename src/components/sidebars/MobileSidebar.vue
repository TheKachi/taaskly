<template>
	<Modal
		modal="$atts.modal"
		title="Sign Out"
	>
		<p class="text-primary text-lg tracking-[0.1rem] text-center">
			Are you sure you want to sign out?
		</p>

		<div class="grid grid-cols-2 gap-4">
			<button class="modal-btn bg-red" @click="signOut">
				Yes
			</button>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'

</script>

<style>

</style>
