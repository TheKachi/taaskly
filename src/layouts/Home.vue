
<template>
	<div class="flex w-full h-screen bg-grey relative  md:py-0 sm:px-4 px-0 overflow-y-hidden ">
		<SidebarsDefaultSidebar />

		<div class="relative bg-clear page w-full border-x border-secondary mx  h-screen sm:h-auto  mt ">
			<Alert />
			<PageLoading />
			<div class="w-full h-full relative overflow-y-auto">
				<slot />
			</div>
			<LazyModalBase />
		</div>
		<LazySidebarsSearchBar />
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page{
    background-color: #fff;
    // border-top-left-radius: 12px;
    box-shadow: -3px 3px 12px rgb(10 46 101 / 3%);
    // padding: 20px;

	@media (max-width: 680px){
    border-radius: 0;
    width: 100%;
    padding: 0px;
    box-shadow: none;
	}
}
.mx{
	margin-left: min(20%, 14rem);
	margin-right: min(20%, 20rem);
	@media (max-width:1024px){
		margin-left: 0;
		margin-right: 0;
	}
}
.mt{
	// margin-top: min(20%, 3rem);
	// @media (max-width:640px){
	// 	margin-top: 64px;
	// }
}
</style>
