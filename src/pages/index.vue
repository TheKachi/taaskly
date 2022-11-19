<template>
	<LazyTopbarHomeNavBar />
	<main class="w-full bg-clear pt-36 text-primary md:overflow-y-hidden min-h-screen">
		<section class="container mx-auto w-full md:mt-24 relative px-5 md:px-0 flex flex-col md:flex-row gap-8">
			<div class="w-full flex flex-col justify-center items-center md:items-start">
				<h1 class="font-semibold text-[32px] text-center md:text-start md:text-[45px] max-w-[560px]">
					Don't stress about the things you need to do, <span class="grad">use Taaskly</span>
				</h1>
				<!-- <h1 class="font-semibold text-[32px] text-center md:text-start md:text-[45px] max-w-[560px]">
					Work <span class="grad">whenever</span>  and <span class="grad">wherever</span>  you want, doing <span class="grad">whatever</span>  you want.
				</h1> -->

				<p class="text-base md:text-lg text-center md:text-start max-w-[480px] md:mt-7 mt-2.5">
					Earn up to <b>N100,000+</b>  a month simple performing tasks on Taskly
				</p>

				<div class="flex flex-col justify-center md:justify-start md:flex-row gap-6 items-center mt-12">
					<nuxt-link to="/auth/signup" class="btn-primary h-14 px-20 hover:-translate-y-2 transite">
						Get Started
					</nuxt-link>
				</div>
			</div>

			<img src="@/assets/images/landing/cta.png" alt="" class="md:w-[45vw] md:absolute -right-14">
		</section>
	</main>
</template>

<script lang="ts" setup>
import { useSignin } from '@/composables/auth/auth'
import { useUser } from '@/composables/auth/user'
const { googleSignin, signOut } = useSignin()
const { isLoggedIn, user } = useUser()

definePageMeta({
	layout: 'landing',
	middleware: 'is-authenticated'
})
</script>

<style scoped>
/* .grad{
background: linear-gradient(65deg, #89216b , var(--red));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} */
.grad {
  background: -webkit-linear-gradient(245.29deg, #6DC1DC 13.32%, #A690FC 28.55%, #FC96BB 55.55%, #FFC397 84.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    animation: hue 1.5s infinite linear;
	 -webkit-text-stroke: 1px var(--primary);
}
@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
  }
}
</style>
