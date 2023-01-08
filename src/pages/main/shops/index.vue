<template>
	<div>
		shops
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'main-default',
	middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
