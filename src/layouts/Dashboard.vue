
<template>
	<div class="flex w-full h-screen bg-grey relative py-[14px] sm:px-4 px-0 md:overflow-y-hidden ">
		<SidebarsDefaultSidebar />
		<TopbarDefaultTopbar />
		<div class="relative bg-clear page w-full sm:rounded-xl ml  h-screen sm:h-auto  mt mt-auto">
			<Alert />
			<PageLoading />
			<div class="w-full px-4 relative ">
				<slot />
			</div>

			<LazyModalBase />
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page{
    background-color: #fff;
    border-top-left-radius: 12px;
    box-shadow: -3px 3px 12px rgb(10 46 101 / 3%);
    padding: 20px 25px 0;

	@media (max-width: 680px){
    border-radius: 0;
    width: 100%;
    padding: 10px 0px;
    box-shadow: none;
	}
}
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
