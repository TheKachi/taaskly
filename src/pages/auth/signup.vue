<template>
	<main class="main-layout">
		<div class="auth-box">
			<h1 class="auth-title">
				Create an account
			</h1>
			<p class="text-sm text-center mb-2">
				We encourage passwordless login being more secure and safe
			</p>
			<form class="auth-form">
				<button class="btn">
					Sign up with Google
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

definePageMeta({
	layout: 'auth',
	middleware: 'is-not-authenticated'
})

</script>

<style scoped></style>
