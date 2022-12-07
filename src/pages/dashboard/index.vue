
<template>
	<div class="flex p-4 bg-gray-200 border border-gray-300 rounded-lg shadow-md">
		<div class="flex-shrink-0">
			<Avatar />
		</div>
		<div class="ml-4">
			<div class="text-xs text-gray-500">
				5m
			</div>
			<div class="text-lg font-bold">
				<a href="#" class="text-primary hover:text-teal-600">@username</a>
			</div>
			<div class="text-sm text-gray-700">
				This is a tweet!
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

definePageMeta({
	layout: 'dashboard'
	// middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped lang="scss">

.hi{
	height:calc(100% );
	@media (max-width: 640px){
		height:calc(100% - 70px);
	}
}
</style>
