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
				<label>What type of task is this?</label>
				<div class="flex self-start bg-gray-200 rounded">
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

			<button class="modal-btn">
				<span v-if="true"> Post</span>
				<Spinner v-else />
			</button>
		</form>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'home'
})

</script>

<style scoped>

</style>
