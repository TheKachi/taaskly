<template>
	<div class="w-full">
		<DataTable :table-header="['NAME', 'EMAIL', 'PHONE', 'TOTAL-SPENT']" :data="items" data-type="Order" />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'shop-default',
	middleware: ['is-authenticated', 'has-no-profile']
})

const items = ref([])
// const items = ref([
// 	{ name: '1Abubakri oluwatunbosunmi oluwakemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '2Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '3Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '4Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '5Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '6Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '7Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '8Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '9Abubakri oluwatunbosun oluwakemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '10Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '11Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '12Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '13Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '14Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '15Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '16Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '17Abubakri oluwatunbosun oluwakemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '18Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '19Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '20Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '21Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '22Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '23Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '24Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '25Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '26Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '27Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '28Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '29Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '30Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
// 	{ name: '31Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' }
// ])

</script>

<style scoped>

</style>
