<template>
	<div>
		<Head>
			<Title>Taaskly - {{ $route.params.id }}</Title>
			<Meta name="description" content="My app description" />
		</Head>
		This is the id ---- {{ $route.params.id }}

		
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'home'
	// middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
