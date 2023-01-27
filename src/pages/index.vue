<template>
	<main class="flex flex-col ">
		<LandingHero />
		<LandingFeatures />
	</main>
</template>

<script lang="ts" setup>
// import { useSignin } from '@/composables/auth/auth'
// import { useUser } from '@/composables/auth/user'
// const { googleSignin, signOut } = useSignin()
// const { isLoggedIn, user } = useUser()

definePageMeta({
	layout: 'landing'
})
</script>

<style scoped>
h1 {
        font-size: clamp(40px, 8.8vw, 58px);
        font-weight: 800;
		line-height: clamp(40px, 9vw, 75px) ;
    }

</style>
