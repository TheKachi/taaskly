<template>
	<Modal
		modal="$atts.modal"
		title="Delete Task"
	>
		<p class="text-primary text-lg tracking-[0.1rem] text-center">
			Are you sure you want to Delete this Task?
		</p>

		<div class="grid grid-cols-2 gap-4">
			<button class="modal-btn" @click="useTaskModal().closeDeleteTask()">
				No
			</button>
			<button class="modal-btn bg-red" :disabled="loading" @click="deleteTask">
				<span v-if="!loading"> Yes</span>
				<Spinner v-else />
			</button>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import { useDeleteTask } from '@/composables/tasks'
import { useAuthModal, useTaskModal } from '@/composables/core/modals'
import { useSignin } from '@/composables/auth/auth'
import Modal from '@/components/core/modal/Modal.vue'

const { deleteTask, loading } = useDeleteTask()

</script>

<style>

</style>
