<template>
	<Modal
		modal="$atts.modal"
		:title="credential.step.value===0 ? 'Make an Offer': 'Confirm Offer' "
		:auto-close="true"
	>
		<div class="max-h-screen overflow-y-auto">
			<form class="auth-form mt-1.5" @submit.prevent="makeOffer">
				<div v-if="credential.step.value===0" class="auth-form">
					<div class="field relative">
						<label for="student">Write an Offer</label>
						<textarea v-model="credential.offerMsg.value" placeholder="Why should you be choosen for this task?" rows="4" class="input-textarea" required />
					</div>
					<div class="field relative">
						<label for="student">Task Price  <icon name="info" class="w-4 text-black cursor-pointer" />  </label>
						<div id="amount" class="relative w-full">
							<span class="absolute left-2 text-base font-bold top-1.5 bg-primary rounded-md px-2 py-1 text-white">#</span>
							<input
								v-model="credential.price.value"
								v-money
								placeholder="The price of the task"
								type="tel"
								class="input-field pl-11"
								required
							>
						</div>
					</div>
				</div>

				<div class="flex items-center gap-10  w-full">
					<button v-if=" credential.step.value===1" class="modal-btn" @click="credential.step.value--">
						Back
					</button>

					<button class="modal-btn" :disabled="loading">
						<span v-if="!loading"> {{ credential.step.value===0 ? 'Proceed': 'Send' }}</span>
						<Spinner v-else class="!border-t-dark !border-[#0c030366]" />
					</button>
				</div>
			</form>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useCreateTask } from '~~/src/composables/tasks'
import { useOfferTask } from '@/composables/tasks/offer'
const { formStep } = useCreateTask()
const { credential, loading, makeOffer } = useOfferTask()
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
