<template>
	<div>
		<DataTable :table-header="['NAME', 'EMAIL', 'PHONE', 'TOTAL-SPENT']" :data="items" data-type="Customer" />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'shop-default',
	middleware: ['is-authenticated', 'has-profile']
})

const items = ref([])
</script>

<style scoped>

</style>
