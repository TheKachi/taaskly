import { default } from './tab/index.vue';
<template>
	<div class="tab-body ">
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
    // console.log(selected)
    emit('changed', selected)
}
</script>

<style scoped>
.tab-body{
    display: inline-flex;
    align-items: center;
    background-color: #f5f6fa;
    border-radius: 22px;
    outline: none;
    color: rgba(10,46,101,.9);
    overflow: auto;
    border: none;
    font-size: .75rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 7px;
}
.tab-item{
    cursor: pointer;
    font-weight: 600;
    color: rgba(10, 46, 101, 0.81);
    background: transparent;
    transition: opacity .5s ease;
    text-transform: uppercase;
    opacity: .6;
    padding: 7px 20px;
    border-radius: 22px;
    white-space: nowrap;
}
.active{
        opacity: 1;
    background: #fff;
    color: var(--primary)
}
</style>
