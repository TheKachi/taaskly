<template>
	<main class="w-full h-screen">
		<transition name="slideUp" appear>
			<div
				class="container mx-auto flex flex-col justify-center items-center h-full text-center"
			>
				<header class="mb-8 flex flex-col justify-center items-center">
					<h1 class="home-title title">
						Welcome to Vue KanBan
					</h1>
					<p class="home-desc">
						An OpenSource KanBan board built by Kromate in Vue
					</p>
				</header>
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
	layout: 'landing'
})
</script>
