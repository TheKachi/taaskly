
<template>
	<main class="flex flex-col px-14 py-12 relative">
		<!-- <h1 class="text-[32px] font-bold mb-2">
			Support
		</h1> -->
		<p class="text-grey4">
			Use the channels below to contact us or get help.
		</p>

		<section class="border border-primary p-5 rounded-md max-w-[730px] grid grid-cols-2 mt-6 gap-y-4 gap-x-5">
			<a v-for="link in links" :key="link.name" :href="link.to" class="profile-link">
				<icon :name="link.icon" class="w-8 svg" />
				<span class="text-sm ml-3 font-medium">{{ link.name }}</span>
				<icon name="right" class="w-6 ml-auto" />
			</a>
		</section>
	</main>
</template>

<script setup lang="ts">
const links = ref([
// 	{
// 		name: 'Frequently asked questions',
// 		icon: 'faq',
// 		to: '#'
// },
	{
		name: 'Chat with us',
		icon: 'phone',
		to: '#'
},
// 	{
// 		name: 'Our Policies',
// 		icon: 'policy',
// 		to: '#'
// },
	{
		name: 'Instagram',
		icon: 'instagram',
		to: '#'
},
	{
		name: 'Call us',
		icon: 'phone',
		to: '#'
},
	{
		name: 'Twitter',
		icon: 'twitter',
		to: '#'
},
	{
		name: 'Email us',
		icon: 'email',
		to: '#'
}
])
definePageMeta({
	layout: 'main-default',
	middleware: 'is-authenticated'
})
</script>

<style scoped>
    .profile-link{
        @apply flex items-center text-dark w-full py-2 bg-light min-h-[72px] pl-3 pr-4 rounded-md border border-dark;
    }
	.svg{
		@apply border border-dark h-10 w-10 p-2 text-secondary rounded
	}
</style>
