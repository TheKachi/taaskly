
<template>
	<div>
		<input
			v-model="tagInput"
			type="text"
			class="input-field"
			:disabled="tags.size >= tagsCount"
			@keyup.enter="addTag()"
			@keyup.space="addTag()"
			@keydown.prevent.tab="addTag()"
		>
		<span v-if="tags.size >= tagsCount" class="text-sm text-rose-600">You can only enter {{ tagsCount }} tags</span>
		<div class="tags">
			<div class="flex gap-3 mt-3">
				<span v-for="tag in tags" :key="tag" class="flex gap-2 bg-primary px-3 py-1 rounded text-sm text-white">
					{{ tag }}
					<Icon class="w-5 cursor-pointer" name="close" @click="removeTag(tag)" />
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
   modelValue: { type: Set, default: () => new Set() },
  tagsCount: {
    type: Number,
    default: 3,
    required: false
  }
})

const emit = defineEmits(['update:modelValue'])

const tags = ref(props.modelValue)
const tagInput = ref('')
const addTag = () => {
  tags.value.add(tagInput.value)
  emit('update:modelValue', tags.value)
  tagInput.value = ''
}
const removeTag = (tag: string) => {
  tags.value.delete(tag)
  emit('update:modelValue', tags.value)
}
</script>
