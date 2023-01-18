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
					>
				</a>

				<!-- <div class="hidden gap-7 ml-20  lg:flex">
					<a href="/#onboard" class="nav-item">
						About
					</a>
					<span to="#" class="nav-item option relative flex gap-2 items-center cursor-pointer">
						Schools <Icon name="down" class="w-4 " />
						<div class="mobile-card !pt-48">
							<div class=" transite shadow-card">
								<div
									class="flex flex-col items-start gap-3.5"
								>
									<a href="#">
										School of Product
									</a>
									<a href="#">
										School of Engineering
									</a>
									<a href="#">
										School of Data
									</a>
								</div>
							</div>
						</div>
					</span>
					<nuxt-link to="#" class="nav-item">
						Join the Community
					</nuxt-link>

					<span class="nav-item option relative flex gap-2 items-center cursor-pointer">
						help <Icon name="down" class="w-4 " />
						<div class="mobile-card">
							<div class=" transite shadow-card">
								<div
									class="flex flex-col items-start gap-3.5"
								>
									<nuxt-link to="/faqs">
										FAQs
									</nuxt-link>
									<a href="#footer">
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</span>
				</div> -->
			</div>
			<div class=" items-center justify-between gap-3 pc">
				<nuxt-link to="/auth/login" class="btn-secondary">
					Log In
				</nuxt-link>
				<nuxt-link to="/auth/register" class="btn-primary">
					Sign up
				</nuxt-link>
			</div>

			<!-- <icon
				class="mobile w-6 cursor-pointer z-50"
				:name="show ? 'close' : 'menu'"
				@click="toggleMenu"
			/> -->

			<component :is="show ? close : menu" class="cursor-pointer mobile" @click="toggleMenu" />
		</header>

		<div
			v-if="show"
			class="fixed inset-0 bg-blue bg  h-screen pt-32 px-5 bg-white"
		>
			<nuxt-link to="/auth/login" class="btn-secondary mb-4">
				Log In
			</nuxt-link>
			<nuxt-link to="/auth/register" class="btn-primary">
				Sign up
			</nuxt-link>

			<!-- <div class="grid grid-cols-2 mt-[45px] gap-4 gap-y-12">
				<div class="flex flex-col gap-[30px]">
					<h1 class="font-bold">
						SCHOOLS
					</h1>
					<span class="font-medium text-sm">School of Product</span><span class="font-medium text-sm">School of Data</span><span class="font-medium text-sm">School of Systems Eng</span>
				</div>
				<div class="flex flex-col gap-[30px]">
					<h1 class="font-bold">
						COMPANY
					</h1>

					<span class="font-medium text-sm">About</span><nuxt-link to="/faqs" class="font-medium text-sm">
						FAQs
					</nuxt-link><span class="font-medium text-sm">Join the Community</span><span class="font-medium text-sm">Partnership</span>
				</div>

				<div class="flex flex-col gap-[30px]">
					<h1 class="font-bold">
						HELP
					</h1>

					<a class="font-medium text-sm" href="mailto:axiaafrica@gmail.com">axiaafrica@gmail.com</a><a class="font-medium text-sm" href="tel:+2349015558035">09015558035</a>
				</div>
			</div> -->
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
