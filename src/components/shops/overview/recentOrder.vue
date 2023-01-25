<template>
	<div class="lg:col-span-2 min-h-[300px] max-h-[400px] overflow-auto rounded-md bg-gray-100 p-4 flex flex-col gap-4">
		<div class="flex items-center justify-between">
			<h3 class="text-lg font-semibold">
				Recent Orders
			</h3>
			<nuxt-link to="/" class="text-sm underline">
				View All
			</nuxt-link>
		</div>

		<div class="h-full flex items-center justify-center">
			<div class="flex flex-col items-center gap-2">
				<p>Your most recent orders will appear, add products to start selling</p>
				<nuxt-link to="/" class="underline text-lg">
					Add Product
				</nuxt-link>
			</div>
		</div>
	</div>
</template>
