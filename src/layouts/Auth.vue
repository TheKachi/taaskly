
<template>
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
	  background: #0f0c29;
    background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
}
</style>
