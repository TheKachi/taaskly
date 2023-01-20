<template>
	<main class="p-4 flex gap-3 flex-wrap center min-h-[80vh]">
		<LazyComingSoon
			:img="defaultImg"
			title="Marketplace coming soon"
			description="Cakes, Snacks, Bags, Clothes e.t.c. whatever it is that you need  you can find vendors around you using Taaskly Marketplace. <br> <br> You can also sell your products here."
			btn-text="Start Selling"
		/>
	</main>
</template>

<script setup lang="ts">
import defaultImg from '@/assets/images/main/coming_soon_market.svg'
definePageMeta({
	layout: 'main-default',
	middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>
.card {
	@apply border border-dark;
	height: 200px;
	width: 100%;
	max-width: 250px;
	border-radius: 8px;
	box-shadow: 3px 6px 10px 0 rgb(0 102 245 / 7%);
	cursor: pointer;
	transition: border .3s ease, transform .3s ease;
	display: flex;
	align-items: center;
	padding: 24px 20px 32px 24px;
	background-color: #fff;
	position: relative;
	margin-right: 10px;
	background-color: #e6f9ff;
	box-shadow: 3px 6px 10px 0 rgb(244 201 210 / 17%);

}
</style>
