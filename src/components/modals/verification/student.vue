<template>
	<Modal
		modal="$atts.modal"
		title="Student Verification"
	>
		<form class="auth-form" @submit.prevent="createProfile">
			<div class="field">
				<label for="type">Verification Type</label>
				<select id="type" name="student" class="input-field">
					<option value="student_id">
						Student ID
					</option>
					<option value="biodata">
						Biodata
					</option>
					<option value="course_form">
						Course Form
					</option>
				</select>
			</div>

			<div class="field">
				<label for="last_name">Upload a file</label>
				<label for="file" class="input-field" />
				<input id="file" type="file" class=" hidden" required>
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
