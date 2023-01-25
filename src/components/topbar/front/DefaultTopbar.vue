<template>
	<nav
		class="absolute  w-full top-0  h-16 px-4  box-border z-20 bg-white shadow flex justify-center "
	>
		<div class="flex w-full h-16 items-center justify-between max-w-5xl">
			<div class="flex items-center gap-2">
				<component :is="menu" class="mobile cursor-pointer z-50" @click="useSidebarModal().openShopMobileSidebar()" />
				<a href="/">
					<img
						src="/logo-text.svg"
						alt="logo"
						class="md:h-7 hidden md:block"
					>
				</a>
			</div>

			<div class="flex items-center gap-4">
				<div ref="target" class="flex flex-col relative">
					<div
						v-if="user"
						class="cursor-pointer flex items-center gap-2.5 rounded-md p-1.5 px-2 md:border bg-gray-100"
					>
						<Avatar v-if="user" :name="user.displayName" :src="user.photoURL" />
						<div class="flex flex-col">
							<span class="text-sm font-semibold text-primary">{{ user.displayName }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useAuthModal, useSidebarModal } from '@/composables/core/modals'
import { useUser } from '@/composables/auth/user'
import { useProfile } from '@/composables/auth/profile'
import menu from '@/assets/icons/src/menu.vue'
import shop from '~~/src/assets/icons/src/shop.vue'
import service from '~~/src/assets/icons/src/service.vue'
import signOut from '~~/src/assets/icons/src/signOut.vue'

const { user } = useUser()
const target = ref(null)
const showMenu = ref(false)
const closeMenu = () => (showMenu.value = false)
const toggleMenu = () => (showMenu.value = !showMenu.value)
onClickOutside(target, closeMenu)

const { getProfile, loading, profileData } = useProfile()
onMounted(getProfile)

const topbarName = computed(() => useRoute().name)
</script>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
	transition: all 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
	transform: translateY(-10px);
	opacity: 0;
}
</style>
