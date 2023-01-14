<template>
	<Modal
		modal="$atts.modal"
		title="Create A New Service"
		:auto-close="true"
	>
		<div class="max-h-screen overflow-y-auto">
			<p class="">
				Tell us a little bit about yourself
			</p>
			<!-- <BadgeSmall class="absolute right-0" :name="`${formStep}/ 2`" /> -->
		</div>
	</Modal>
</template>

<script setup lang="ts">

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
