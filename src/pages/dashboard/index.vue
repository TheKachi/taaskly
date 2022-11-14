<template>
	<main class="w-full h-screen">
		<transition name="slideUp" appear>
			<div
				class="container mx-auto flex flex-col md:justify-center items-center h-full text-center gap-4 py-20 text-primary"
			>
				<h1 class="font-bold md:text-8xl text-5xl">
					Earn on the Go
				</h1>
				<p class="md:text-4xl text-xl">
					Earn extra cash while doing the things you love to do
				</p>
				<nuxt-link to="/auth/login" class="md:text-3xl text-lg rounded border-2 border-clear py-3 px-6 mt-6">
					Try out MVP
				</nuxt-link>
			</div>
		</transition>
	</main>
</template>

<script lang="ts" setup>
import { useSignin } from '@/composables/auth/auth'
import { useUser } from '@/composables/auth/user'
const { googleSignin, signOut } = useSignin()
const { isLoggedIn, user } = useUser()

definePageMeta({
	layout: 'dashboard'
})
</script>
