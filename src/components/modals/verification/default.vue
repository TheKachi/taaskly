<template>
	<Modal
		modal="$atts.modal"
		title="Verification Modal"
	>
		<form class="auth-form" @submit.prevent="createProfile">
			<div class="field">
				<label for="student">Are you a student ?</label>
				<select id="student" v-model="verificationFormState.student.value" name="student" class="input-field" required>
					<option value="true">
						Yes
					</option>
					<option value="false">
						No
					</option>
				</select>
			</div>

			<div v-if="JSON.parse(verificationFormState.student.value)" id="student" class="auth-form">
				<div class="field">
					<label for="type">Student Verification Type</label>
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
			</div>

			<div v-else id="individual" class="auth-form">
				<div class="field">
					<label for="type">Individual Verification Type</label>
					<select id="type" name="student" class="input-field">
						<option value="driver_license">
							Driver license
						</option>
						<option value="nin_slip">
							NIN Slip
						</option>
						<option value="bank_statement">
							Bank Statement
						</option>
					</select>
				</div>
			</div>
			<div class="field">
				<span class="label">Upload a File</span>
				<label for="document" class="input-field border-dashed center">Choose a File</label>
				<input id="document" type="file" class="hidden" required @change="update($event)">
			</div>

			<button class="modal-btn">
				Verify
			</button>
		</form>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useVerification } from '@/composables/auth/verification'
import { toBase64 } from '@/composables/useUtils'
const { verificationFormState } = useVerification()

		   const update = async (el) => {
			   const b64 = await toBase64(el.srcElement.files[0])
			   console.log(el)
		   }
</script>

<style scoped>

</style>
