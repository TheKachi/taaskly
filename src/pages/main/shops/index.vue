<template>
	<main class="p-4 flex gap-3 flex-wrap center min-h-[80vh]">
		<!-- <div v-for="n in 10" :key="n" class="card">
			<h1 class="text-dark text-5xl">
				Shoes
			</h1>
		</div> -->
		<LazyComingSoon
			class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
			title="Shops Coming Soon"
			description="Using an online shop to get access to various tools to help you grow your business."
		/>
	</main>
</template>

<script setup lang="ts">
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
