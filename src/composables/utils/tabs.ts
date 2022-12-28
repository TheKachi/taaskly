import { Raw, Component } from 'vue'
import TabComponents from '@/components/core/Tabs.vue'

export const useTabs = () => {
	const tabViews = ref([] as Array<string>)
	const selected = ref('')
	let tabs:any

	const initTabs = (
		selectedStr: string,
		tabStringArray: Array<string>,
		tabComp: Raw<Component>
	) => {
		selected.value = selectedStr
		tabViews.value = tabStringArray
		tabs = tabComp
	}
	const updateTab = (data: any) => {
		useRouter().push({ query: { q: data } })
		useRoute().query.q = data
		selected.value = data
	}

	return { initTabs, TabComponents, selected, tabViews, tabs, updateTab }
}
