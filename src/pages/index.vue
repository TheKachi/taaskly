<template>
	<LazyTopbarHomeNavBar />
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

const badgeArray = ref([
	{ name: 'Shoes', top: '15%', right: '20%' },
	{ name: 'Cakes', top: '20%', right: '15%' },
	{ name: 'Wigs', top: '25%', right: '10%' },
	{ name: 'Deliveries', top: '30%', right: '5%' },
	{ name: 'Errands', top: '35%', right: '0%' },
	{ name: 'Tutorials', top: '40%', right: '5%' },
	{ name: 'Capenter', top: '45%', right: '10%' },
	{ name: 'Electrian', top: '50%', right: '15%' },
	{ name: 'Painting', top: '55%', right: '10%' },
	{ name: 'Home cleaning', top: '60%', right: '15%' },
	{ name: 'Marketing', top: '65%', right: '20%' },
	{ name: 'Design', top: '70%', right: '25%' },
	{ name: 'Programming', top: '75%', right: '20%' },
	{ name: 'design', top: '80%', right: '15%' }
	// { name: 'Photography', top: '20%', right: '15%' },
	// { name: 'Printing', top: '20%', right: '15%' },
	// { name: 'Project Research', top: '20%', right: '15%' },
	// { name: 'Hair Stylist', top: '20%', right: '15%' },
	// { name: 'Barber', top: '20%', right: '15%' },
	// { name: 'Dry cleaner', top: '20%', right: '15%' },
	// { name: 'Plumber', top: '20%', right: '15%' },
	// { name: 'Rice', top: '20%', right: '15%' },
	// { name: 'Laptop', top: '20%', right: '15%' },
	// { name: 'Power Bank', top: '20%', right: '15%' },
	// { name: 'Chicken', top: '20%', right: '15%' },
	// { name: 'Mobile Phone', top: '20%', right: '15%' }
])

definePageMeta({
	layout: 'landing'
})
</script>

<style scoped>
a{
	@apply underline hover:scale-105 cursor-pointer;
}
h1 {
        font-size: clamp(40px, 8.8vw, 58px);
        font-weight: 800;
		line-height: clamp(40px, 9vw, 75px) ;
    }
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
