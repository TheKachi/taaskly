<template>
	<Modal
		modal="$atts.modal"
		title="Flag Task"
	>
		<form @submit.prevent="flagTask">
			<div class="field">
				<label for="student">Why are you flagging this task?</label>
				<select id="student" v-model="flagReason" name="student" class="input-field" required>
					<option value="" disabled>
						Select a reason
					</option>
					<option value="Inapporiate Task">
						Inapporiate Task
					</option>
					<option value="meaningless writing">
						meaningless writing
					</option>
				</select>
			</div>

			<div class="grid grid-cols-1 gap-4">
				<button class="modal-btn " :disabled="loading" type="submit">
					<span v-if="!loading"> Flag</span>
					<Spinner v-else />
				</button>
			</div>
		</form>
	</Modal>
</template>

<script setup lang="ts">
import { useFlagTask } from '@/composables/tasks'
import { useAuthModal, useTaskModal } from '@/composables/core/modals'
import { useSignin } from '@/composables/auth/auth'
import Modal from '@/components/core/modal/Modal.vue'

const { flagTask, loading, flagReason } = useFlagTask()

</script>

<style>

</style>
