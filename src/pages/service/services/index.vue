<template>
	<div>
		Hello World from My services
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
