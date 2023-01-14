<template>
	<form class="auth-form mt-1.5" @submit.prevent="create">
		<div class="field relative">
			<label for="student">Description of the task *</label>
			<textarea v-model="createTaskForm.desc.value" placeholder="What is this task about?" rows="4" class="input-textarea" required />
			<span id="counter" class="text-sm font-medium ml-auto mt-1">140</span>
		</div>
		<div class="field relative">
			<label>What type of task is this?</label>
			<div class="flex self-start bg-gray-200 rounded border border-dark w-full">
				<label for="physical" class="label-radio">
					<input
						id="physical"
						v-model="createTaskForm.remote.value"
						type="radio"
						name="task_type"
						:value="false"
						class="hidden"
						required
					>
					<span>Physical</span>
				</label>
				<label for="online" class="label-radio">
					<input
						id="online"
						v-model="createTaskForm.remote.value"
						type="radio"
						name="task_type"
						:value="true"
						class="hidden"
						required
					>
					<span>Online</span>
				</label>
			</div>
		</div>

		<div v-if="!createTaskForm.remote.value" class="field">
			<label for="location">Task Location</label>
			<LazyLocationInput v-model="createTaskForm.location.value" />
		</div>
		<div class="field relative">
			<label for="tags">Tags</label>
			<LazyAutocomplete v-model="createTaskForm.tags.value" placeholder="Enter Tasks Tags to help with filtering" @update="createTaskForm.tags.value = $event" />
		</div>

		<button class="modal-btn">
			<span v-if="true"> Next</span>
			<Spinner v-else />
		</button>
	</form>
</template>

<script setup lang="ts">
import { useCreateTask } from '~~/src/composables/tasks'
const { create, createTaskForm } = useCreateTask()
</script>

<style scoped>

</style>
