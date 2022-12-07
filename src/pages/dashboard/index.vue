
<template>
	<main class="flex-col flex items-stretch overflow-y-auto">
		<div v-for="n in 10" :key="n" class="flex p-4  border-t border-secondary shadow">
			<div class="flex-shrink-0">
				<Avatar />
			</div>
			<div class="ml-4 flex flex-col">
				<div class="text-lg font-bold">
					<a href="#" class="text-primary hover:text-teal-600">@username</a>
				</div>
				<div class="text-xs text-gray-500">
					5m
				</div>
				<div class="text-[15px] text-gray-700">
					I need someone to help me get a package from new hall Jumia pickup center and deliver it to me
				</div>
				<div class="text-[15px] text-gray-700 mt-3 flex gap-4">
					<span class="btn-primary">Accept</span>
					<span class="btn-secondary">share</span>
				</div>
			</div>
		</div>
	</main>
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
