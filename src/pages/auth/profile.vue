<template>
	<main class="main-layout">
		<div class="auth-box">
			<h1 class="auth-title">
				Create a profile
			</h1>
			<p class="text-sm text-center mb-2">
				We encourage passwordless login being more secure and safe
			</p>
			<form class="auth-form">
				<div class="field">
					<label for="email">Email</label>
					<input id="email" type="text" class="input-field" disabled>
				</div>
				<div class="field">
					<label for="password">Password</label>
					<input id="password" type="password" class="input-field" disabled>
				</div>

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

definePageMeta({
	layout: 'auth'
	// middleware: 'is-not-authenticated'
})

// const { credential, login: userLogin, loading, disabled } = useLogin()
const showPassword = ref(false)
const toggleShow = () => {
	showPassword.value = !showPassword.value
}
const login = async () => {
	await userLogin()
}
</script>

<style scoped></style>
