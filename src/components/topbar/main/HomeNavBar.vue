<template>
	<nav class="w-full h-20  center fixed top-0 z-20 inset-x-0 bg-light border-b-[3px] border-dark md:px-[22px]">
		<header
			class="w-full container mx-auto shadow-nav md:shadow-none flex items-center justify-between z-20 px-5 md:px-0 "
		>
			<a href="/">
				<img
					src="/logo-text.svg"
					alt="logo"
					width="116"
					height="28"
				>
			</a>

			<div class=" items-center justify-between gap-3 pc">
				<nuxt-link to="/auth/login" class="btn">
					Log In
				</nuxt-link>
				<nuxt-link to="/auth/register" class="btn btn-secondary">
					Sign up
				</nuxt-link>
			</div>

			<component :is="show ? close : menu" class="cursor-pointer mobile" @click="toggleMenu" />
		</header>

		<transition v-if="show" name="slide" appear>
			<div

				class="absolute border-2 border-dark rounded-xl top-24 py-7  w-11/12  px-7 bg-white"
			>
				<nuxt-link to="/auth/login" class="btn-secondary mb-4">
					Log In
				</nuxt-link>
				<nuxt-link to="/auth/register" class="btn-primary">
					Sign up
				</nuxt-link>
			</div>
		</transition>
	</nav>
</template>

<script setup lang="ts">
import close from '@/assets/icons/src/close.vue'
import menu from '@/assets/icons/src/menu.vue'

const show = ref(false)
const toggleMenu = () => (show.value = !show.value)
const navigateTo = (route: string) => {
	router.push(route)
	show.value = false
}

</script>

<style scoped>
.btn{
	@apply text-sm
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.25s ease-in;
}
.slide-enter-from,
.slide-leave-to {
	transform: translateY(-200px);
}
</style>
