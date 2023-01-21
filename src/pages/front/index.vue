<template>
	<div class="container max-w-5xl">
		<FrontHeader />
		<div class="flex items-start mt-8 gap-12">
			<FrontCategoryTab />
			<ServicesWebsiteSectionData />
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'front-default'
})

</script>

<style scoped></style>
