<template>
	<div>
		This is the id ---- {{ $route.params.id }}
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'dashboard'
	// middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
