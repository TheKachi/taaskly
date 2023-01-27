<template>
	<div class="w-full">
		<DataTable :table-header="tableHeaders" :data="items" :loading="loading">
			<template #option>
				<div class="flex flex-col gap-4 md:flex-row md:items-center justify-between p-6 bg-gray-100">
					<div class="w-full md:w-fit h-fit relative">
						<input type="text" class="p-2 pl-16 bg-light w-full md:w-[300px] rounded focus:outline-none">
						<add class="absolute top-1/2 left-4 -translate-y-1/2" />
					</div>
					<div class="flex gap-4">
						<button class="p-2 px-3 min-w-[90px] bg-light rounded text-primary text-sm">
							Filter
						</button>
						<button class="p-2 px-3 min-w-[90px] bg-light rounded text-primary text-sm flex items-center gap-2">
							<add />
							Create Product
						</button>
					</div>
				</div>
			</template>
			<template #empty>
				<div class="flex flex-col gap-3 items-center text-sm text-center">
					<p class="text-primary text-lg font-bold">
						No Product found
					</p>
					<p class="text-primary">
						No product found, click Create Product to start <br> adding products
					</p>
					<button class="p-2 px-3 min-w-[90px] bg-light rounded text-primary text-sm">
						Create Product
					</button>
				</div>
			</template>
		</DataTable>
	</div>
</template>

<script setup lang="ts">
import add from '@/assets/icons/src/add.vue'
definePageMeta({
	layout: 'shop-default',
	middleware: ['is-authenticated', 'has-no-profile']
})
const tableHeaders = [
	{ text: 'NAME', width: '30' },
	{ text: 'CATEGORY', width: '19' },
	{ text: 'PRICE', width: '17' },
	{ text: 'QUANTITY', width: '17' },
	{ text: 'INVENTORY', width: '17' }
]
const loading = ref(true)
// const items = ref([])
const items = ref([
	{ name: 'Product nam', category: 'Product category', price: '20,000', quantity: '25', inventory: 'in-stock' },
	{ name: 'Product nam', category: 'Product category', price: '20,000', quantity: '25', inventory: 'in-stock' },
	{ name: 'Product nam', category: 'Product category', price: '20,000', quantity: '25', inventory: 'in-stock' },
	{ name: 'Product nam', category: 'Product category', price: '20,000', quantity: '25', inventory: 'in-stock' },
	{ name: 'Product nam', category: 'Product category', price: '20,000', quantity: '25', inventory: 'in-stock' }
])

onMounted(() => {
	setTimeout(() => {
		loading.value = false
	}, 2000)
})
</script>

<style scoped>

</style>
