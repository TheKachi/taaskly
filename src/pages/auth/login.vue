<template>
	<main class="main-layout">
		<div class="auth-box">
			<h1 class="auth-title">
				Welcome back
			</h1>
			<p class="text-sm text-center mb-2">
				We encourage passwordless login being more secure and safe
			</p>
			<form class="auth-form" @submit.prevent="googleSignin">
				<button class="btn-primary" :disabled="loading">
					<span v-if="!loading"> 	Sign in with Google</span>
					<Spinner v-else />
				</button>
			</form>

			<p class="text-sm mt-4 text-center">
				Don't have an Account? <nuxt-link to="/auth/register" class="font-bold italic">
					Sign up
				</nuxt-link>
			</p>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useSignin } from '@/composables/auth/auth'
const { googleSignin, loading } = useSignin()
definePageMeta({
	layout: 'auth',
	middleware: 'is-not-authenticated'
})

</script>

<style scoped></style>
