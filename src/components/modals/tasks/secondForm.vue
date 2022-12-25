<template>
	<form class="auth-form mt-1.5" @submit.prevent="create">
		<div class="field relative">
			<label for="student">Due Date</label>
			<input v-model="createTaskForm.dueDate.value" placeholder="When do you need this task done" type="date" class="input-field">
		</div>
		<div class="field relative">
			<label for="student">Task Price  <icon v-tooltip="'how much are you willing to pay for this task'" name="info" class="w-4 text-black cursor-pointer" />  </label>
			<input v-model="createTaskForm.amount.value" placeholder="how much are you willing to pay for this task" type="number" class="input-field">
		</div>

		<div class="flex items-center gap-10 mt-8">
			<button class="btn-secondary w-full" @click="formStep--">
				Back
			</button>

			<button class="btn-primary w-full">
				<span v-if="!loading"> Post</span>
				<Spinner v-else />
			</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import { createTask } from '@/composables/tasks/create'
const { create, formStep, loading, createTaskForm } = createTask()
</script>

<style scoped>

</style>
