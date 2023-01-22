<template>
	<div>
		Hello World from Service Website
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'service-default',
	middleware: ['is-authenticated', 'has-no-profile']
})
</script>

<style scoped>

</style>
