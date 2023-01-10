<template>
	<div>
		Hello World from coupons
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'shop-default',
	middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
