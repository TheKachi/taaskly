<template>
	<div class="container max-w-5xl">
		<FrontHeader />
		<div class="flex w-full py-2 justify-start px-2.5 md:px-0 mt-6">
			<LazyTabs :selected="selected" :tabs="tabViews" @changed="updateTab($event)" />
		</div>

		<keep-alive>
			<component :is="tabs[selected]" />
		</keep-alive>
	</div>
</template>

<script setup lang="ts">
import { useTabs } from '@/composables/utils/tabs'
import store from '@/pages/front/store.vue'
import reviews from '@/pages/front/reviews.vue'
import recommendations from '@/pages/front/recommendations.vue'
const { TabComponents, initTabs, selected, tabViews, updateTab, tabs, onTabMounted } = useTabs()
initTabs(
	'store',
	['store', 'reviews', 'recommendations'],
	markRaw({ store, reviews, recommendations })
)

definePageMeta({
	layout: 'front-default'
})

</script>

<style scoped></style>
