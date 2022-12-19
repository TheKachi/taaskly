<template>
	<transition name="fade" appear :duration="500">
		<div
			:close="closeModal"
			:class="[
				type == 'popup' ? 'bg-modal' : 'bg-sidebar',
				'transition-all modal-background',
			]"
			@click="autoClose ? close($el) : null"
		>
			<div v-if="type == 'popup'" class="modal">
				<header class="modal-title flex justify-between w-full items-center">
					{{ title }}
					<icon
						name="close"
						class="text-primary w-7 cursor-pointer"
						@click="closeModal()"
					/>
				</header>
				<div class="w-full">
					<slot />
				</div>
			</div>
			<transition v-else name="slide" appear :duration="500">
				<div class="sidebar">
					<slot />
				</div>
			</transition>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { modal } from '@/composables/core/modals'

window.addEventListener('resize', () => {
closeModal()
})
watch(useRoute(), (from, to) => {
	closeModal()
})
type modalTypes = 'popup' | 'sidebar';
const props = defineProps({
	autoClose: {
		default: true,
		type: Boolean,
		required: false
	},
	modal: {
		type: String,
		required: true
	},
	title: {
		default: 'Default Title',
		type: String,
		required: false
	},
	type: {
		default: 'popup',
		type: String as PropType<modalTypes>,
		required: false
	}
})

const close = (e) => {
	if (
		typeof e.className === 'string' &&
		e.className.includes('modal-background')
	)
		return closeModal()
}

const closeModal = () => {
	modal.close(props.modal)
}
</script>

<style scoped>
.bg-modal {
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	width: 100vw;
	max-width: 100vw;
	min-height: 100%;
	z-index: 1000000;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(1.5px);
}
.bg-sidebar {
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	width: 100vw;
	max-width: 100vw;
	min-height: 100vh;
	z-index: 1000000;
	backdrop-filter: blur(1.5px);
}

.fade-enter-active,
.fade-leave-active {
	transition: all 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
	transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
	transform: translateX(-500px);
}
</style>
