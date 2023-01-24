<template>
	Hello World
</template>

<script setup lang="ts">
import Add from '../../../assets/icons/src/add.vue'
definePageMeta({
	layout: 'shop-default',
	middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
