<template>
	<Modal
		modal="$atts.modal"
		title="Create Task"
	>
		<form class="auth-form" @submit.prevent="verify">
			<div class="field relative">
				<label for="student">Description of the task</label>
				<textarea placeholder="What is this task about?" rows="4" class="input-textarea" />
				<span id="counter" class="text-sm font-medium ml-auto mt-1">140</span>
			</div>
			<div class="field relative">
				<label>What type of task is this?</label>
				<div class="flex self-start bg-gray-200 rounded border border-primary">
					<label for="physical" class="label-radio">
						<input id="physical" type="radio" name="task_type" value="physical" class="hidden">
						<span>Physical</span>
					</label>
					<label for="online" class="label-radio">
						<input id="online" type="radio" name="task_type" value="online" class="hidden">
						<span>Online</span>
					</label>
				</div>
			</div>

			<div class="field">
				<label for="type">Task Location</label>
				<input class="input-field" placeholder="Enter the Location for this Task">
			</div>
			<div class="field">
				<label for="type">Tags</label>
				<input class="input-field" placeholder="Enter Tasks Tags to help with filtering">
			</div>

			<button class="modal-btn">
				<span v-if="true"> Post</span>
				<Spinner v-else />
			</button>
		</form>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'

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
