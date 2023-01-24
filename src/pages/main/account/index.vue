<template>
	<main class="w-full h-screen p-5">
		<div>
			<TabComponents :selected="selected" :tabs="tabViews" @changed="updateTab($event)" />
			<keep-alive>
				<component :is="tabs[selected]" />
			</keep-alive>
		</div>
	</main>
</template>

<script lang="ts" setup>
import verification from '@/pages/main/account/Verification.vue'
import account from '@/pages/main/account/Account.vue'
import { useTabs } from '@/composables/utils/tabs'

const { TabComponents, initTabs, selected, tabViews, updateTab, tabs, onTabMounted } = useTabs()

initTabs(
	'account',
	['account', 'verification'],
	markRaw({ verification, account })
)

onMounted(() => {
	onTabMounted()
})

definePageMeta({
	layout: 'main-default',
	middleware: ['is-authenticated', 'has-no-profile']
})
</script>
