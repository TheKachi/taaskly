<template>
	<main class="w-full h-screen">
		<transition name="slideUp" appear>
			<div
				class="container mx-auto flex flex-col md:justify-center items-center h-full text-center gap-4 py-20 text-primary"
			>
				<h1 class="font-bold md:text-8xl text-5xl">
					Task
				</h1>
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
	layout: 'dashboard',
	middleware: 'is-authenticated'
})
</script>
