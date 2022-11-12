
<template>
	<div id="svg-container" class="h-screen">
		<slot />
		<ModalBase />
		<PageLoading />
		<Alert />
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#svg-container{
	background: url('../assets/images/landing/home.svg');
	background-size: cover;
}
</style>
