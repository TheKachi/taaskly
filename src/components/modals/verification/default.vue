<template>
	<Modal
		modal="$atts.modal"
		title="Verification Modal"
	>
		<form class="auth-form" @submit.prevent="createProfile">
			<div class="field">
				<label for="student">Are you a student ?</label>
				<select id="student" name="student" class="input-field" required>
					<option value="true">
						Yes
					</option>
					<option value="false">
						No
					</option>
				</select>
			</div>
			<div v-if="formStep == 1" id="step 1" class="auth-form">
				<div class="field">
					<label for="type">Verification Type</label>
					<select id="type" name="student" class="input-field">
						<option value="driver">
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
