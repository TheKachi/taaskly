
<template>
	<div class="flex w-full h-screen bg-grey relative py-[14px] pr-6 md:overflow-y-hidden ">
		<SidebarsDefaultSidebar />
		<TopbarDefaultTopbar />
		<div class="relative bg-clear w-full rounded-xl ml shadow-sm border mt mt-auto">
			<Alert />
			<PageLoading />
			<div class="w-full px-6 relative ">
				<slot />
			</div>

			<ModalBase />
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.ml{
	margin-left: min(20%, 14rem);
}
.mt{
	margin-top: min(20%, 3rem);
}
</style>
