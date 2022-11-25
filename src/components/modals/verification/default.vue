<template>
	<Modal
		modal="$atts.modal"
		title="Verification Modal"
	>
		<form class="auth-form" @submit.prevent="verify">
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
					<select id="type" v-model="verificationFormState.id_type.value" name="student" class="input-field">
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
					<select id="type" v-model="verificationFormState.id_type.value" name="student" class="input-field">
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
				<label for="document" class="input-field border-dashed center">{{ name }}{{ percentage }}</label>
				<input id="document" type="file" class="hidden" required @change="update($event)">
			</div>

			<button class="modal-btn" :disabled="!verificationFormState.document.value || loading">
				<span v-if="!loading"> 	Verify</span>
				<Spinner v-else />
			</button>
		</form>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useVerification } from '@/composables/auth/verification'
import { toBase64 } from '@/composables/useUtils'
const { verify, verificationFormState, loading, percentage, uploadFile } = useVerification()

const name = ref('Choose a File')
		   const update = async (el) => {
			   const file = el.target[0]?.files[0]
			   verificationFormState.document.value = file
			   const file_name = el.srcElement.files[0].name
			   name.value = file_name
			   uploadFile()
		   }
</script>

<style scoped>

</style>
