<template>
	<div>
		<div class="tabs flex items-stretch overflow-hidden">
			<ul role="tablist" class="flex gap-6">
				<li
					v-for="(tab, i) in tabs"
					:key="i"
					:class="{ 'is-active': tab.isActive }"

					role="presentation"
				>
					<a
						:aria-controls="tab.hash"
						:aria-selected="tab.isActive"
						:href="tab.hash"
						class="!pt-5 !pb-3"
						role="tab"
						@click="selectTab(tab.hash, $event)"
						v-html="tab.header"
					/>
				</li>
			</ul>
		</div>
		<div class="tabs-details ">
			<slot />
		</div>
	</div>
</template>

<script>
import { reactive, provide, onMounted, toRefs } from 'vue'

export default {

  emits: ['changed', 'clicked'],

  setup(_, context) {
    const state = reactive({
      activeTabHash: '',
      lastActiveTabHash: '',
      tabs: []
    })

    provide('tabsProvider', state)

    provide('addTab', (tab) => {
      state.tabs.push(tab)
    })

    provide('updateTab', (computedId, data) => {
      const tabIndex = state.tabs.findIndex((tab) => tab.computedId === computedId)

      data.isActive = state.tabs[tabIndex].isActive

      state.tabs[tabIndex] = data
    })

    provide('deleteTab', (computedId) => {
      const tabIndex = state.tabs.findIndex((tab) => tab.computedId === computedId)

      state.tabs.splice(tabIndex, 1)
    })

    const selectTab = (selectedTabHash, event) => {
      if (event) {
        event.preventDefault()
      }

      const selectedTab = findTab(selectedTabHash)

      if (!selectedTab) {
        return
      }

      if (event && selectedTab.isDisabled) {
        event.preventDefault()
        return
      }

      if (state.lastActiveTabHash === selectedTab.hash) {
        context.emit('clicked', { tab: selectedTab })
        return
      }

      state.tabs.forEach((tab) => {
        tab.isActive = (tab.hash === selectedTab.hash)
      })

      context.emit('changed', { tab: selectedTab })

      state.lastActiveTabHash = state.activeTabHash = selectedTab.hash

      // const storageKey = `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`
    }

    const findTab = (hash) => {
      return state.tabs.find((tab) => tab.hash === hash)
    }

    onMounted(() => {
      if (!state.tabs.length) {
        return
      }

      window.addEventListener('hashchange', () => selectTab(window.location.hash))

      if (findTab(window.location.hash)) {
        selectTab(window.location.hash)
        return
      }

      // const storageKey = `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`

      // if (props.options.defaultTabHash && findTab('#' + props.options.defaultTabHash)) {
      //   selectTab('#' + props.options.defaultTabHash)
      //   return
      // }

      selectTab(state.tabs[0].hash)
    })

    return {
      ...toRefs(state),
      selectTab,
      findTab
    }
  }
}
</script>

<style scoped>

.tabs ul {
    align-items: center;
    border-bottom: 1px solid var(--divider);
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
}

ul {
    list-style: none;
}

.is-active{
    display: block;
}

.tabs li.is-active a {
    border-bottom-color: var(--primary);
    color: var(--primary);
}

.tabs a {
    align-items: center;
    border-bottom: 4px solid transparent;
    color: #4a4a4a;
    display: flex;
    justify-content: center;
    padding-left: 0;
    vertical-align: top;
}
a {
    color: var(--primary);
    cursor: pointer;
    text-decoration: none;
    transition: all 86ms ease-out;
	font-weight: 500;
}
</style>
