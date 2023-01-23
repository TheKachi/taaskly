<template>
	<nav
		class="w-full md:py-2  center fixed top-0 z-20 inset-x-0 bg-light shadow md:px-[22px] "
	>
		<header
			class="w-full container mx-auto shadow-nav md:shadow-none flex items-center justify-between z-20 px-5 md:px-0 h-16 shadow"
		>
			<div class="flex items-center">
				<a href="/">
					<img
						src="/logo-text.svg"
						alt="logo"
						class="h-8"
						width="130px"
						height="32px"
					>
				</a>
			</div>
			<div class=" items-center justify-between gap-3 pc">
				<nuxt-link to="/auth/login" class="btn-secondary">
					Log In
				</nuxt-link>
				<nuxt-link to="/auth/register" class="btn-primary">
					Sign up
				</nuxt-link>
			</div>

			<component :is="show ? close : menu" class="cursor-pointer mobile" @click="toggleMenu" />
		</header>

		<div
			v-if="show"
			class="fixed inset-0 bg-light bg  h-screen pt-32 px-5 bg-white"
		>
			<nuxt-link to="/auth/login" class="btn-secondary mb-4">
				Log In
			</nuxt-link>
			<nuxt-link to="/auth/register" class="btn-primary">
				Sign up
			</nuxt-link>
		</div>
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
.shadow-card{
	background: #FFFCF9;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
@apply py-3 px-4 pr-6 w-max min-w-[1rem]
}
.mobile-card {
	@apply hidden opacity-0 flex-col gap-5 absolute pt-36   items-start justify-start ;
}
.option:hover > .nav-icon {
	transform: rotate(180deg);
}
.option:hover > .mobile-card,
.option:focus-within > .mobile-card {
	display: flex;
	opacity: 1;
}
</style>
