<template>
	<div>
		Hello World from Customers
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'service-default',
	middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
