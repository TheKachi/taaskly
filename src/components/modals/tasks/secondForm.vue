<template>
	<form class="auth-form mt-1.5" @submit.prevent="create">
		<div class="field relative">
			<label for="student">Description of the task</label>
			<textarea placeholder="What is this task about?" rows="4" class="input-textarea" />
			<span id="counter" class="text-sm font-medium ml-auto mt-1">140</span>
		</div>
		<div class="field relative">
			<label>What type of task is this?</label>
			<div class="flex self-start bg-gray-200 rounded border border-primary w-full">
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

		<div class="flex items-center gap-10 mt-8">
			<button class="btn-secondary w-full">
				<span v-if="true"> Back</span>
			</button>

			<button class="btn-primary w-full">
				<span v-if="true"> Post</span>
				<Spinner v-else />
			</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import { createTask } from '@/composables/tasks/create'
const { create } = createTask()
</script>

<style scoped>

</style>
