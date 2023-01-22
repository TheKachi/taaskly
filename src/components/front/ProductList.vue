<template>
	<section
		class="grid-box border gap-2.5 md:gap-6 justify-center items-stretch w-full"
	>
		<article
			v-for="product in products"
			:key="product.name"
			class="border border-dark p-2 sm:p-2.5 rounded-md flex flex-col justify-between hover:shadow-md md:hover:scale-105 transite !duration-200 w-full"
		>
			<img :src="product.image" :alt="product.name" class="w-full border border-dark rounded-md">

			<div class="flex flex-col gap-2 mt-4 transite">
				<p class="font-medium">
					{{ product.name }}
				</p>
				<p class="font-bold">
					{{ convertToCurrency(product.price) }}
				</p>
			</div>
			<button class="btn-primary w-full mt-2">
				Add to Cart
			</button>
		</article>
	</section>
</template>

<script setup lang="ts">
import { convertToCurrency } from '@/composables/utils'

const products = ref([
	{ name: 'African Bomber', price: 13000, image: '/front-demo.svg' },
	{ name: 'Crop Hoodie', price: 5500, image: '/front-demo.svg' },
	{ name: 'Zipper Hoodie', price: 5000, image: '/front-demo.svg' },
	{ name: 'Bomber Jacket Tracksuit', price: 15000, image: '/front-demo.svg' },
	{ name: 'Couples Tracksuit', price: 29000, image: '/front-demo.svg' },
	{ name: 'Sweatshirt Tracksuit', price: 15000, image: '/front-demo.svg' },
	{ name: 'Sweatshirt Tracksuit', price: 15000, image: '/front-demo.svg' }
])
</script>

<style scoped lang="scss">
article:hover > button {
	@apply relative z-50 opacity-100;
}
.grid-box {
	display: grid;

	@media screen and (min-width: 300px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media screen and (min-width: 720px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}
</style>
