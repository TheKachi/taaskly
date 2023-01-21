<template>
	<div class="container max-w-5xl">
		<FrontHeader />
		<div class="flex items-start justify-between mt-8 gap-12 px-2.5 lg:px-0 w-full">
			<FrontCategoryTab />
			<FrontProductList />
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'front-default'
})

</script>

<style scoped></style>
