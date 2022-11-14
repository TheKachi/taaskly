<template>
	<main class="main-layout">
		<div class="auth-box">
			<h1 class="auth-title">
				Welcome back
			</h1>
			<p class="text-sm text-center mb-2">
				We encourage passwordless login being more secure and safe
			</p>
			<form class="auth-form">
				<button class="btn">
					Sign in with Google
				</button>
			</form>

			<p class="text-sm mt-4 text-center">
				Don't have an Account? <nuxt-link to="/auth/signup" class="font-bold italic">
					Sign up
				</nuxt-link>
			</p>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useSignin } from '@/composables/auth/auth'

definePageMeta({
	layout: 'auth',
	middleware: 'is-not-authenticated'
})

</script>

<style scoped></style>
