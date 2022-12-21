<template>
	<Modal
		modal="$atts.modal"
		title="Create Task"
		:auto-close="true"
	>
		<BadgeSmall class="absolute right-0" :name="`${formStep}/ 2`" />
		<firstForm v-if="formStep === 1" />
		<secondForm v-if="formStep === 2" />
	</Modal>
</template>

<script setup lang="ts">
import firstForm from './firstForm.vue'
import secondForm from './secondForm.vue'
import Modal from '@/components/core/modal/Modal.vue'
import { createTask } from '@/composables/tasks/create'
const { formStep } = createTask()
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
