<template>
	<form class="auth-form mt-1.5" @submit.prevent="create">
		<div class="field relative">
			<label for="student">Start Date</label>
			<input v-model="createTaskForm.startDate.value" placeholder="When do you need this task done" type="date" class="input-field" required>
			<!-- <span class="flex center"><input id="" type="checkbox" name=""> Immediately </span> -->
		</div>
		<div class="field relative">
			<!-- <label for="student">Task Price  <icon v-tooltip="'how much are you willing to pay for this task'" name="info" class="w-4 text-black cursor-pointer" />  </label> -->
			<label for="student">Task Price  <icon name="info" class="w-4 text-black cursor-pointer" />  </label>
			<div id="amount" class="relative w-full">
				<span class="absolute left-2 text-base font-bold top-1.5 bg-primary rounded px-2 py-1 text-white">#</span>
				<input
					v-model="createTaskForm.amount.value"
					v-money
					placeholder="The price of the task"
					type="tel"
					class="input-field pl-11"
					required
				>
			</div>
		</div>

		<div class="flex items-center gap-10 mt-8">
			<button class="btn-secondary w-full" @click="formStep--">
				Back
			</button>

			<button class="btn-primary w-full" :disabled="loading">
				<span v-if="!loading"> Post</span>
				<Spinner v-else />
			</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import { useCreateTask } from '~~/src/composables/tasks'
const { create, formStep, loading, createTaskForm } = useCreateTask()
</script>

<style scoped>

</style>
