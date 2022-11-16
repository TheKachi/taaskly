
<template>
	<main class="main-layout">
		<div class="auth-box">
			<h1 class="auth-title">
				<icon v-if="formStep!=1" class="w-5 absolute left-0" name="back" @click="formStep--" />
				{{ formStep==1 ? 'Create a profile ':'Almost done' }}
			</h1>
			<p class="text-sm text-center mb-2">
				{{ formStep==1 ? 'Basic details to get you started on your Journey with taaskly':'Few steps left' }}
			</p>
			<form class="auth-form" @submit.prevent="createProfile">
				<div v-if="formStep == 1" id="step 1" class="auth-form">
					<div class="field">
						<label for="first_name">First Name</label>
						<input id="first_name" v-model="profileFormState.first_name.value" type="text" class="input-field" required>
					</div>
					<div class="field">
						<label for="last_name">Last Name</label>
						<input id="last_name" v-model="profileFormState.last_name.value" type="text" class="input-field" required>
					</div>
					<div class="field">
						<label for="email">Email</label>
						<input
							id="email"
							v-model="profileFormState.email.value"
							type="text"
							class="input-field"
							disabled
							required
						>
					</div>
					<div class="field">
						<label for="phone">Phone No.</label>
						<input id="phone" v-model="profileFormState.phone.value" type="tel" class="input-field">
					</div>
					<div class="field">
						<label for="student">Are you a student ?</label>
						<select id="student" v-model="profileFormState.student.value" name="student" class="input-field">
							<option value="true">
								Yes
							</option>
							<option value="false">
								No
							</option>
						</select>
					</div>
					<div v-if="profileFormState.student.value" class="field">
						<label for="university">What university?</label>
						<select id="university" v-model="profileFormState.university.value" name="university" class="input-field">
							<option value="university of lagos">
								University of Lagos
							</option>
						</select>
					</div>
				</div>

				<div v-else id="step 2" class="auth-form">
					<div class="field">
						<label for="address">Address</label>
						<input id="address" v-model="profileFormState.address.value" type="address" class="input-field">
					</div>
					<div class="field">
						<label for="date">Date of Birth</label>
						<input id="date" v-model="profileFormState.dob.value" type="date" class="input-field">
					</div>
					<div class="field">
						<label for="desc">Profile Description</label>
						<textarea id="desc" v-model="profileFormState.desc.value" type="text" class="input-field py-2 h-24" rows="6">test</textarea>
					</div>
				</div>

				<button class="btn">
					{{ formStep==1 ? 'Next':'Create' }}
				</button>
			</form>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useCreateProfile } from '@/composables/auth/profile'
const { loading, profileFormState, formStep, createProfile } = useCreateProfile()

definePageMeta({
	layout: 'auth',
	middleware: 'is-authenticated'
})

</script>

<style scoped></style>
