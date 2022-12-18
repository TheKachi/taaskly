
<template>
	<div class="tab-body border border-primary">
		<span v-for="tab in tabs" :key="tab" :class="['tab-item transite', tab==selected ? 'active' :''] " @click="onClick(tab)">{{ tab }}</span>
	</div>
</template>

<script setup lang="ts">

defineProps({
    tabs: {
        type: Array,
        default: () => [],
        reuired: true
    },
    selected: {
        type: String,
        default: '',
        required: false
    }
})

const emit = defineEmits(['changed'])

const onClick = (selected) => {
    emit('changed', selected)
}
</script>

<style scoped lang="scss">
.tab-body{
    @apply inline-flex items-center sticky z-10 p-[7px] top-4 outline-none rounded-full overflow-auto bg-gray-100 text-xs text-primary;
}
.tab-item{
    @apply cursor-pointer font-semibold text-primary bg-transparent transition-opacity duration-500 ease-linear uppercase opacity-60 py-[7px] px-5 rounded-full whitespace-nowrap;
}
.active{
    @apply opacity-100 bg-white text-primary border border-primary;
}
</style>
