<template>
	<Modal
		modal="$atts.modal"
		title="Create Task"
		:auto-close="true"
	>
		<div class="max-h-screen overflow-y-auto">
			<!-- <BadgeSmall class="absolute right-0" :name="`${formStep}/ 2`" /> -->
			<firstForm v-if="formStep === 1" />
			<secondForm v-if="formStep === 2" />
		</div>
	</Modal>
</template>

<script setup lang="ts">
import firstForm from './firstForm.vue'
import secondForm from './secondForm.vue'
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
