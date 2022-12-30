<template>
	<span
		v-if="name"
		class="py-0.5 px-2 font-medium text-xs rounded-3xl border border-primary absolute"
		:style="`top: ${badge.top}; right: ${badge.right};`"
	>
		<slot>{{ name }}</slot>
	</span>
</template>

<script setup lang="ts">
const topValue = Math.random() * 70 + '%'
const rightValue = Math.random() * 70 + '%'

// const toLowerCase = (val) => {
// 	return val.toLowerCase()
// }
// const toCapitalized = (data:string) => {
// const capitalized = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()
//     return capitalized
// }

const props = defineProps<{
	name: number | string;
	top?: string;
	right?: string;
	badge?: object;
}>()

const selectPalette = ref<{ color: string; bg: string }>()
</script>
