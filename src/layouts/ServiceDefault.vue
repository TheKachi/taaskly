<template>
	<div class="flex w-full h-screen bg-light relative  md:py-0  sm:pl-4 overflow-y-hidden ">
		<LazySidebarsServiceLeftSidebar />

		<div class="relative bg-light page w-full border-x border-faded_primary mx  h-screen sm:h-auto  mt ">
			<TopbarServiceDefaultTopbarService />

			<Alert />
			<PageLoading />
			<div class="w-full h-full relative overflow-y-auto overflow-hidden bg-light">
				<section class="flex-col flex items-stretch overflow-y-auto pt-16 pb-6 relative">
					<slot />
				</section>
			</div>
			<LazyModalBase />
		</div>
	</div>
</template>

<script setup lang="ts">
// import DefaultTopbarService from '../components/topbar/services/DefaultTopbarService.vue'

</script>

<style scoped lang="scss">
.page {
	background-color: #fff;
	// border-top-left-radius: 12px;
	box-shadow: -3px 3px 12px rgb(10 46 101 / 3%);
	// padding: 20px;

	@media (max-width: 680px) {
		border-radius: 0;
		width: 100%;
		padding: 0px;
		box-shadow: none;
	}
}

.mx {
	margin-left: min(20%, 14rem);

	@media (max-width:1024px) {
		margin-left: 0;
		margin-right: 0;
	}
}

.mt {
	// margin-top: min(20%, 3rem);
	// @media (max-width:640px){
	// 	margin-top: 64px;
	// }
}
</style>
