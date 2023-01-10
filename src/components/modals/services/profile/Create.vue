<template>
	<Modal
		modal="$atts.modal"
		:title="computedModalTitle"
		:auto-close="true"
	>
		<div class="max-h-screen overflow-y-auto">
			<BadgeSmall class="absolute right-0" :name="`${profileFormStep}/ 2`" />
			<firstForm v-if="profileFormStep === 1" />
			<secondForm v-if="profileFormStep === 2" />
		</div>
	</Modal>
</template>

<script setup lang="ts">
import firstForm from './firstForm.vue'
import secondForm from './secondForm.vue'
import Modal from '@/components/core/modal/Modal.vue'
import { useServiceProfileForm } from '~~/src/composables/services'

const formType = ref<'create'|'edit'>('create')

const computedModalTitle = computed(() => {
    if (formType.value === 'create') {
        return 'Create Task'
    } else {
        return 'Edit Task'
    }
})
const { profileFormStep } = useServiceProfileForm(formType.value)
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
