<template>
	<div class="flex w-full h-screen relative md:py-0 px-0 overflow-y-hidden">
		<div class="relative page w-full h-screen sm:h-auto">
			<TopbarFrontDefaultTopbar />
			<Alert />
			<PageLoading />
			<div
				class="w-full h-full relative overflow-y-auto overflow-hidden bg-light"
			>
				<section
					class="flex-col flex items-stretch overflow-y-auto pt-16 pb-6 relative"
				>
					<slot />
				</section>
			</div>
			<LazyModalBase />
		</div>
	</div>
</template>

<script setup lang="ts"></script>

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
</style>
