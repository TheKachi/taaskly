<template>
	<div class="w-full md:max-w-[13.5rem] md:flex flex-col border border-dark rounded-md gap-2 border-b-0 hidden">
		<h4 class="header bg-primary text-light py-2 px-4 w-full">
			Categories
		</h4>

		<router-link v-for="category in categories" :key="category.name" :to="`?category=${category.name}`" :class="[ selected == category.name ?'active':'', 'py-2 px-4 border-y border-dark']">
			{{ category.name }}
		</router-link>
	</div>
</template>

<script setup lang="ts">
const selected = computed({
    get: () => useRoute().query.category
})

console.log(selected.value)

const categories = ref([
    { name: 'All', selected: true },
    { name: 'New' },
    { name: 'Hoodies' },
    { name: 'Jackets' },
    { name: 'Trousers' },
    { name: 'Shirts' },
    { name: 'Joggers' }
])
</script>

<style scoped lang="scss">
.active{
    @apply border border-y-2 font-bold;
}
a{
    @apply hover:shadow hover:scale-y-105 hover:font-bold transite;
    &:last-child {
     @apply rounded-b-md ;
    }
}
</style>
