
<template>
	<main class="main-layout">
		<div class="auth-box">
			<h1 class="auth-title">
				<icon class="w-7 cursor-pointer absolute left-0" name="back" @click="useAuthModal().openLogout()" />
				{{ formStep==1 ? 'Create a profile ':'Almost done' }}
			</h1>
			<p
				v-if="profileFormState.referrer.value"
				class="text-sm text-center mb-2 max-w-xs"
				v-html="formStep==1 ? `Basic details to get you started on your Journey with <b class='text-lg '> ${profileFormState.referrer.value}</b>  on Taaskly` :'Few steps left' "
			/>
			<p v-else class="text-sm text-center mb-2 max-w-xs">
				{{ formStep==1 ? 'Basic details to get you started on your Journey with taaskly':'Few steps left' }}
			</p>
			<form class="auth-form" @submit.prevent="createProfile">
				<div v-if="formStep == 1" id="step 1" class="auth-form">
					<div class="field">
						<!-- <label for="username">Username <icon v-tooltip="'You can only set this once'" name="info" class="w-4 text-black cursor-pointer" /> </label> -->
						<label for="username">Username <icon name="info" class="w-4 text-black cursor-pointer" /> </label>
						<input
							id="username"
							v-model="profileFormState.username.value"
							type="text"
							class="input-field"
							:class="[isUsernameAvailable? '':'!border-rose-500']"
							required
						>
						<span v-if="!isUsernameAvailable" class="text-rose-500 font-bold">This username is taken</span>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div class="field">
							<label for="first_name">First Name</label>
							<input id="first_name" v-model="profileFormState.first_name.value" type="text" class="input-field" required>
						</div>
						<div class="field">
							<label for="last_name">Last Name</label>
							<input id="last_name" v-model="profileFormState.last_name.value" type="text" class="input-field" required>
						</div>
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
						<label for="phone">Phone No (whatsapp preferred)</label>
						<input
							id="phone"
							v-model="profileFormState.phone.value"
							type="number"
							class="input-field"
							:class="[phoneNumError? '!border-rose-500':'']"
							required
						>

						<span v-if="phoneNumError" class="text-rose-500 font-bold">{{ phoneNumError }}</span>
					</div>
				</div>

				<div v-else id="step 2" class="auth-form">
					<div class="field">
						<label for="date">Date of Birth</label>
						<input id="date" v-model="profileFormState.dob.value" type="date" class="input-field" required>
					</div>
					<div class="field">
						<label for="desc">Profile Description</label>
						<textarea id="desc" v-model="profileFormState.desc.value" type="text" class="input-field py-2 h-24" rows="6">test</textarea>
					</div>
				</div>

				<button class="btn-primary" :disabled="loading || !isUsernameAvailable || usernameLoading || phoneNumError">
					<span v-if="!loading"> 	{{ formStep==1 ? 'Next':'Create' }}</span>
					<Spinner v-else />
				</button>
			</form>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useCreateProfile, useUsername } from '@/composables/auth/profile'
import { useAuthModal } from '@/composables/core/modals'
const { loading, profileFormState, formStep, createProfile, initForm, phoneNumError } = useCreateProfile()
const { isUsernameAvailable, loading: usernameLoading } = useUsername()

initForm()

definePageMeta({
	layout: 'auth',
	middleware: 'is-authenticated'
})

</script>

<style scoped></style>
