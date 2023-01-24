<template>
	<div class="bg-gray-100 rounded-md min-h-[80vh]">
		<div class="w-full flex mt-6">
			<nuxt-link to="/shop/order/create" class="btn bg-dark max-w-[60%] mt-8 text-light ml-auto mr-6">
				<span>
					<add />
				</span> Create Order
			</nuxt-link>
		</div>
		<ShopsOrderEmptyOrder class="center py-8" />
	</div>
</template>

<script setup lang="ts">
import Add from '../../../assets/icons/src/add.vue'
definePageMeta({
	layout: 'shop-default',
	middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
