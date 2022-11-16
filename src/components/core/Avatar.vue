<template>
	<span
		v-if="name && !src"
		:style="`width: ${size}px; height: ${size}px; object-fit: cover;`"
		class="flex items-center justify-center uppercase  bg-primary text-white font-medium rounded-full"
	>
		<span :style="`font-size: ${size/2}px;line-height: 1em`">{{ name[0] }}</span>
	</span>
	<img
		v-else
		:src="src"
		:style="`width: ${size}px; height: ${size}px; object-fit: cover;`"
		class="!max-w-[1920px] rounded-full"
	>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AvatarComp',
	props: {
		src: {
			type: String,
			default: null
		},
		name: {
			type: String,
			required: false,
			default: '#'
		},
		size: {
			required: false,
			type: Number,
			default: 36
		},
		editable: {
			type: Boolean,
			required: false,
			default: false
		}
	}

})

</script>
