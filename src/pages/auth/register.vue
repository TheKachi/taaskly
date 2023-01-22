<template>
	<main class="main-layout">
		<div class="auth-box">
			<h1 class="auth-title">
				Create an account
			</h1>
			<h1 v-if="referred" class="auth-title text-sm ">
				You have been referred by {{ decryptString(referred) }}
			</h1>
			<p class="text-sm text-center mb-2">
				We encourage passwordless login being more secure and safe
			</p>
			<form class="auth-form" @submit.prevent="googleSignin">
				<button class="btn-primary" :disabled="loading">
					<span v-if="!loading"> 	Sign up with Google</span>
					<Spinner v-else />
				</button>
			</form>

			<p class="text-sm mt-4 text-center">
				Already have an Account? <nuxt-link to="/auth/login" class="font-bold italic">
					Sign in
				</nuxt-link>
			</p>
		</div>
	</main>
</template>

<script setup lang="ts">
import { decryptString } from '@/composables/utils'
import { useSignin } from '@/composables/auth/auth'
const { googleSignin, loading } = useSignin()

const referred = useRoute().query.refer

definePageMeta({
	layout: 'auth',
	middleware: 'is-not-authenticated'
})

</script>

<style scoped></style>
