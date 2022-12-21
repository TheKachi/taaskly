
<template>
	<div class="p-5">
		<!-- Track, omoo -->
		<form class="auth-form" @submit.prevent="verify">
			<div class="field relative">
				<label for="student">Description of the task</label>
				<textarea placeholder="What is this task about?" rows="4" class="input-textarea" />
				<span id="counter" class="text-sm font-medium ml-auto mt-1">140</span>
			</div>
			<div class="field relative">
				<label for="student">Tags</label>
				<LazyAutocomplete v-model="tags" />
			</div>

			<button class="modal-btn">
				<span v-if="true"> next</span>
				<Spinner v-else />
			</button>

			<!-- <div class="flex gap-5">
				<button class="modal-btn">
					<span v-if="true"> next</span>
					<Spinner v-else />
				</button>
			</div> -->
		</form>
	</div>
</template>

<script setup lang="ts">
const tags = ref(new Set())

definePageMeta({
	layout: 'home'
})

</script>

<style scoped>

</style>
