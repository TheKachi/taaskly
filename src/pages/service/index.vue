<template>
	<DefaultTopbarService />
	<div class="h-screen">
		<div v-if="emptyServices" class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
			Create a Service to get started
			<button
				class="menu-btn flex items-center font-semibold !text-clear hover  bg-primary fixed bottom-4 hover:scale-105 transite !duration-200"
				@click="useServiceProfileModal().openCreateService()"
			>
				<p class="text-base">
					Create Service
				</p>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import DefaultTopbarService from '../../components/topbar/services/DefaultTopbarService.vue'
import { useAuthModal, useServiceProfileModal } from '@/composables/core/modals'
const emptyServices = ref(true)
definePageMeta({
	layout: 'service-default',
	middleware: ['is-authenticated', 'has-profile']
})
</script>

<style scoped>

</style>
