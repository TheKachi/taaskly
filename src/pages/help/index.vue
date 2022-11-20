<template>
	<main class="w-full h-screen">
		<section class="mt-12">
			<h1 class="page-title">
				We are always ready to help
			</h1>
			<p>You can reach out to us on the following platforms</p>

			<div class="grid sm:grid-cols-3 md:grid-cols-4 mt-8 gap-x-12 gap-y-8 justify-center md:justify-start items-center">
				<a href="#" target="_blank" class="box hover:border border-[#ea4336] transite">
					<img src="@/assets/images/social/mail.svg" alt="mail">
				</a>
				<a href="#" target="_blank" class="box hover:border border-[#58e072] transite">
					<img src="@/assets/images/social/whatsapp.svg" alt="whatsapp">
				</a>
				<a href="#" target="_blank" class="box hover:border border-[#00acee] transite">
					<img src="@/assets/images/social/twitter.svg" alt="twitter">
				</a>
				<a href="#" target="_blank" class="box hover:border border-[#0072b1] transite">
					<img src="@/assets/images/social/linkedin.svg" alt="linkedin">
				</a>
				<a href="#" target="_blank" class="box hover:border border-[#cd486b] transite">
					<img src="@/assets/images/social/instagram.svg" alt="instagram">
				</a>
			</div>
		</section>
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

<style scoped>
.box{
width: 150px;
height: 150px;
left: 880px;
top: 495px;
background: #121a2109;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -1px 4px rgba(255, 255, 255, 0.15), inset 3px 5px 3px rgba(255, 255, 255, 0.15);
backdrop-filter: blur(114px);
border-radius: 14px;
}
</style>
