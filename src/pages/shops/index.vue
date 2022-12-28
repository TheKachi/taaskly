<template>
	<div>
		shops
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'home-with-header',
	middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
