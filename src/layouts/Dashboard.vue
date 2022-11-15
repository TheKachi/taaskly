
<template>
	<div class="flex w-full h-screen bg-grey relative py-[14px] sm:px-4 px-0 md:overflow-y-hidden ">
		<SidebarsDefaultSidebar />
		<TopbarDefaultTopbar />
		<div class="relative bg-clear w-full sm:rounded-xl ml shadow-sm border  mt mt-auto">
			<Alert />
			<PageLoading />
			<div class="w-full px-6 relative ">
				<slot />
			</div>

			<LazyModalBase />
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ml{
	margin-left: min(20%, 14rem);
	@media (max-width:1024px){
		margin-left: 0;
	}
}
.mt{
	margin-top: min(20%, 3rem);
}
</style>
