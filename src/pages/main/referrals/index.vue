<template>
	<div>
		this is a list of your referrals
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'main-default',
	middleware: ['is-authenticated', 'has-no-profile']
})
</script>

<style scoped>

</style>
