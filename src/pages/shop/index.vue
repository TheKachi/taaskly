<template>
	<div class="flex flex-col gap-6">
		<p>current date</p>
		<div class="p-3 md:px-4 bg-orange-100 border border-red rounded border-dashed flex items-center flex-col md:flex-row gap-4 justify-between min-h-[100px]">
			<p>A few steps left to set your store up completely (3/5)</p>
			<button class="py-3 px-5 bg-[#ac6315] text-white rounded font-medium">
				Complete setup
			</button>
		</div>
		<div class="gridbox grid gap-6 grid-cols-2 ">
			<div v-for="item in grids" :key="item.title" class="px-3 py-4 flex items-center gap-4 rounded bg-gray-100">
				<component :is="item.icon" />
				<div class="flex flex-col">
					<p>{{ item.title }}</p>
					<p class="font-bold text-xl">
						{{ item.title == 'Total sales' ? `NGN ${item.amount}` : `${item.amount}` }}
					</p>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<ShopsOverviewChart />
			<ShopsOverviewTopSelling />
			<ShopsOverviewMostViewed />
			<ShopsOverviewRecentOrder />
		</div>
	</div>
</template>

<script setup lang="ts">
import dashboard from '~~/src/assets/icons/src/dashboard.vue'
definePageMeta({
	layout: 'shop-default',
	middleware: ['is-authenticated', 'has-profile']
})

const grids = [
	{ title: 'Total sales', amount: 0, icon: dashboard },
	{ title: 'Total orders', amount: 0, icon: dashboard },
	{ title: 'Completed orders', amount: 0, icon: dashboard },
	{ title: 'Pending orders', amount: 0, icon: dashboard }
]
</script>

<style scoped>
@media only screen and (min-width: 900px) {
	.gridbox{
		grid-template-columns: auto auto auto auto;
	}
}

</style>
