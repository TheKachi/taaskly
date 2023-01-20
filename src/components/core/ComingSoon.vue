<template>
	<div>
		<div
			class="flex flex-col gap-4 justify-center"
		>
			<div>
				<img
					src="../../assets/images/main/construction-img.svg"
					class="w-full h-full object-contain max-w-[400px] mx-auto"
					alt=" Coming Soon illustration"
				>
			</div>
			<h2
				class="text-2xl font-semibold text-center"
			>
				{{ title }}
			</h2>
			<p class="text-xl font-medium text-center max-w-[500px] mx-auto">
				{{ description }}
			</p>
			<button class="btn bg-dark w-[60%] mx-auto mt-3 text-light">
				Join Waitlist
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Coming Soon',
  description: 'Coming Soon description'
})
</script>

<style scoped>
/* .align-main-center{

} */
</style>
