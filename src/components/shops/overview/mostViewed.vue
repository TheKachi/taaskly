<template>
	<div class="lg:col-span-1 min-h-[300px] max-h-[400px] overflow-auto rounded-md bg-gray-100 p-6 flex flex-col gap-6">
		<h3 class="text-lg font-semibold">
			Most Viewed Products
		</h3>
		<div class="flex flex-col">
			<div v-for="item in topProducts" :key="item.title" class="flex items-center gap-3 py-2 border-t justify-between">
				<div class="flex items-center gap-2">
					<img :src="item.img" :alt="item.title" class="w-[40px] h-[40px] rounded-md object-cover">
					<p class="text-sm text-grey_two">
						{{ item.title }}
					</p>
				</div>
				<p class="text-md font-bold">
					₦{{ item.price }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const topProducts = ref([
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA . BHA set', price: '29,000' },
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA . BHA', price: '29,000' },
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA set', price: '29,000' },
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA. BHA set', price: '29,000' },
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA . BKA set', price: '29,000' }
])
</script>
