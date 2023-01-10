<template>
	<form class="auth-form mt-1.5">
		<!-- <div class="field relative">
			<label for="student">Description of the task *</label>
			<textarea v-model="createProfileForm.about.value" placeholder="What is this task about?" rows="4"
				class="input-textarea" required />
			<span id="counter" class="text-sm font-medium ml-auto mt-1">140</span>
		</div>
		<div class="field relative">
			<label for="tags">Tags</label>
			<LazyAutocomplete v-model="createProfileForm.keyword.value"
				placeholder="Enter Tasks Tags to help with filtering" @update="createTaskForm.tags.value = $event" />
		</div>

		<button class="modal-btn">
			<span v-if="true"> Next</span>
			<Spinner v-else />
		</button> -->
		Hello world
	</form>
</template>

<script setup lang="ts">
import { useServiceProfileForm } from '@/composables/services'
interface Props {
	formType: 'create' | 'edit'
}
const props = withDefaults(defineProps<Props>(), {
	formType: 'create'
})
const { createProfileForm } = useServiceProfileForm(props.formType)
</script>

<style scoped>
</style>
