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
							Create Order
						</button>
					</div>
				</div>
			</template>
			<template #empty>
				<div class="flex flex-col gap-3 items-center text-sm text-center">
					<p class="text-primary text-lg font-bold">
						No Order found
					</p>
					<p class="text-primary">
						No order found, share your store to start <br> receiving order
					</p>
					<button class="p-2 px-3 min-w-[90px] bg-light rounded text-primary text-sm">
						Share store
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
	{ text: 'NAME', width: '35' },
	{ text: 'EMAIL', width: '25' },
	{ text: 'PHONE', width: '20' },
	{ text: 'TOTAL-SPENT', width: '20' }
]
const loading = ref(true)
// const items = ref([])
const items = ref([
	{ name: '1Abubakri oluwatunbosunmi oluwakemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '2Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '3Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '4Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '5Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '6Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '7Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '8Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '9Abubakri oluwatunbosun oluwakemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '10Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '11Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '12Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '13Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '14Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '15Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '16Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '17Abubakri oluwatunbosun oluwakemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '18Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '19Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '20Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '21Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '22Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '23Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '24Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '25Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '26Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '27Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '28Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '29Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '30Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: '31Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' }
])

onMounted(() => {
	setTimeout(() => {
		loading.value = false
	}, 2000)
})
</script>

<style scoped>

</style>
