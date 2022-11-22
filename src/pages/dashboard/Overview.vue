<template>
	<section class="mt-12">
		<header>
			<h1 class="page-title">
				Tasks around you
			</h1>
		</header>

		<!-- <p>There are currently no tasks around you</p> -->
		<div class="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 flex-wrap mt-4 gap-4">
			<div v-for="n in 3" :key="n" class="w-full">
				<div class="bg-white transite border rounded-lg shadow-md hover:border-primary min-h-52 flex flex-col justify-between">
					<div class="p-4 flex flex-col gap-2 flex-1">
						<div class="flex flex-row items-center justify-between">
							<div class="flex flex-row items-center gap-3">
								<Avatar name="hot" :size="36" />
								<p class="text-lg font-medium">
									Hot Bread
								</p>
							</div>
							<badge class="!bg-green" name="10" />
						</div>
						<p class="text-[15px]">
							Need to be delivered to a customer urgently
						</p>
						<div class="flex flex-row items-center justify-between mt-auto">
							<div class="flex flex-row items-center gap-3">
								<p class="text-sm font-medium">
									3 meters away from you
								</p>
							</div>
							<badge class="!bg-red" name="High" />
						</div>
					</div>
					<div class="bg-primary text-white rounded-b p-4 flex justify-between items-center">
						<h5 class="font-semibold uppercase text-gray-100">
							ERRAND
						</h5>
						<p class="font-medium uppercase text-gray-100">
							₦‎ 10,000
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
