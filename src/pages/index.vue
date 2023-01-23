<template>
	<TopbarMainHomeNavBar />
	<main class="container mx-auto center-col min-h-screen text-center relative">
		<!-- <LazyBadgeHomeBadge v-for="badge in badgeArray" :key="badge.name" :name="badge.name" :badge="badge" /> -->
		<h1 class="text-black max-w-[597px] ">
			Everything you need in one place.
		</h1>
		<p class="max-w-[651px] mt-2 text-xl font-medium">
			Find whatever <nuxt-link to="/auth/login" class="text-secondary">
				services
			</nuxt-link>, <nuxt-link to="/auth/login" class="text-secondary">
				shops
			</nuxt-link>  or <nuxt-link to="/auth/login" class="text-secondary">
				individuals
			</nuxt-link>  around you needed to get your work done.
		</p>

		<nuxt-link to="/auth/login" class="btn-primary mt-8 min-w-[388px] !no-underline">
			Get Started
		</nuxt-link>
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
