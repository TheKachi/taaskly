<template>
	<Modal
		modal="$atts.modal"
		title="Make an Offer"
		:auto-close="true"
	>
		<div class="max-h-screen overflow-y-auto">
			<form class="auth-form mt-1.5" @submit.prevent="create">
				<div class="field relative">
					<label for="student">Write an Offer</label>
					<textarea placeholder="Why should you be choosen for this task?" rows="4" class="input-textarea" required />
					<span id="counter" class="text-sm font-medium ml-auto mt-1">140</span>
				</div>

				<div class="field relative">
					<!-- <label for="student">Task Price  <icon v-tooltip="'how much are you willing to pay for this task'" name="info" class="w-4 text-black cursor-pointer" />  </label> -->
					<label for="student">Task Price  <icon name="info" class="w-4 text-black cursor-pointer" />  </label>
					<div id="amount" class="relative w-full">
						<span class="absolute left-2 text-base font-bold top-1.5 bg-primary rounded px-2 py-1 text-white">#</span>
						<input
							v-money
							placeholder="The price of the task"
							type="tel"
							class="input-field pl-11"
							required
						>
					</div>
				</div>
				<button class="modal-btn">
					<span v-if="true"> Send</span>
					<Spinner v-else />
				</button>
			</form>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useCreateTask } from '~~/src/composables/tasks'
const { formStep } = useCreateTask()
</script>

<style scoped>
.input::before{
	content: var(--tw-content);
    height: 100%;
	width: var(--w);
    background: #35355b76;
	position: absolute;
}
</style>
