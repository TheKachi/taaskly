
<template>
	<PageLoadingIndicator :height="6" color="#4F1DED" />
	<div class="layout-body">
		<slot />
		<ModalBase />
		<PageLoading />
		<Alert />
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.layout-body{
	  background: var(--clear);

}
</style>
