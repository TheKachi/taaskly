<template>
	<div>
		<input
			v-model="tagInput"
			type="text"
			required
			:placeholder="placeholder"
			class="input-field"
			:disabled="tags.length >= tagsCount"
			@keyup.enter="addTag()"
			@keyup.space="addTag()"
			@keydown.prevent.tab="addTag()"
		>
		<span
			v-if="tags.length >= tagsCount"
			class="text-sm text-rose-600"
		>You can only enter {{ tagsCount }} tags</span>
		<div class="tags">
			<div class="flex gap-3 mt-3">
				<span
					v-for="(tag, i) in tags"
					:key="tag"
					class="flex gap-2 bg-primary px-3 py-1 rounded text-sm text-white"
				>
					{{ tag }}
					<Icon
						class="w-5 cursor-pointer"
						name="close"
						@click="removeTag(tag, i)"
					/>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	modelValue: { type: Array, default: () => [] },
  placeholder: { type: String, default: 'Enter tags' },
	tagsCount: {
		type: Number,
		default: 3,
		required: false
	}
})

const emit = defineEmits(['update:modelValue'])

const tags = ref(props.modelValue)
console.log(tags.value)
const tagInput = ref('')
const addTag = () => {
	if (tagInput.value.trim() === '') return
	tags.value.push(tagInput.value)
  const setArray = new Set(tags.value)
  tags.value = Array.from(setArray)
	emit('update:modelValue', tags.value)
	tagInput.value = ''
}
const removeTag = (tag: string, index: number) => {
	tags.value.splice(index, 1)
	emit('update:modelValue', tags.value)
}
</script>
