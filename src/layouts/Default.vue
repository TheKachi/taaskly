
<template>
	<NuxtLoadingIndicator :height="6" color="#4F1DED" />
	<div class="p-5">
		<slot />
		<ModalBase />
		<PageLoading />
		<Alert />
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
