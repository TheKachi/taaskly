<template>
	<div
		v-if="loading"
		class="fixed left-0 top-0 h-1.5 w-full  bg-green-500 z-[9999]"
	/>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loading = ref(false)
nuxtApp.hook('page:start', () => {
  loading.value = true
})
nuxtApp.hook('page:finish', () => {
  loading.value = false
})
</script>
