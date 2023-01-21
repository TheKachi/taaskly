
<template>
	<section class="grid grid-cols-3 border gap-6">
		<article v-for="product in products" :key="product.name" class="border border-dark p-2.5">
			<img :src="product.image" alt="card image">

			<div class=" flex flex-col gap-2 mt-4 transite">
				<p class="font-medium">
					{{ product.name }}
				</p>
				<p class="font-bold">
					₦ {{ convertToCurrency(product.price) }}
				</p>
			</div>
			<button class="btn-primary w-full mt-2 ">
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
	{ name: 'Sweatshirt Tracksuit', price: 15000, image: '/front-demo.svg' }
])
</script>

<style scoped>
article:hover > button{
    @apply relative z-50 opacity-100
}
</style>
