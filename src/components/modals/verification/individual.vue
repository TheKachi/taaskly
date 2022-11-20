<template>
	<Modal
		modal="$atts.modal"
		title="Individual Verification"
	>
		<form class="auth-form" @submit.prevent="createProfile">
			<div class="field">
				<label for="type">Verification Type</label>
				<select id="type" name="student" class="input-field">
					<option value="bvn">
						BVN
					</option>
					<option value="nin">
						NIN
					</option>
				</select>
			</div>

			<div class="field">
				<label for="last_name">Identity Number</label>
				<input id="last_name" type="text" class="input-field" required>
			</div>

			<button class="modal-btn">
				Verify
			</button>
		</form>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
</script>

<style scoped>

</style>
