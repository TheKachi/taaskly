
<template>
	<!-- <div class="p-5">
		<slot />
		<ModalBase />
		<PageLoading />
		<Alert />
	</div> -->

	<div class="flex w-full h-screen bg-grey relative py-[14px] pr-[14px] md:overflow-y-hidden">
		<SidebarsDefaultSidebar />
		<div class="relative bg-clear w-full rounded-xl ml shadow-sm border mt mt-auto">
			<Alert />
			<PageLoading />
			<div class="w-full px-6 relative ">
				<!-- <AlertBar /> -->
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
	margin-left: min(20%, 15rem);
}
.mt{
	margin-top: min(20%, 2.5rem);
}
</style>
