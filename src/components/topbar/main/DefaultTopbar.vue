<template>
	<nav
		class="absolute  w-full top-0  h-16 px-4  flex items-center justify-between box-border z-20 bg-white shadow"
	>
		<!-- <icon
			class="mobile w-8 cursor-pointer z-50"
			name="menu"
			@click="useSidebarModal().openMobileSidebar()"
		/> -->
		<component :is="menu" class="mobile cursor-pointer z-50" @click="useSidebarModal().openMobileSidebar()" />

		<h1 class="font-semibold text-xl capitalize pc">
			{{ topbarName }}
		</h1>

		<div class="flex items-center gap-4">
			<!-- <Badge :name="profileData?.profileLevel ? profileData?.profileLevel : 'loading...'" class="text-base hidden sm:block" /> -->
			<!-- <nuxt-link
				v-if="profileData && profileData.verifiedLevel === 0"
				to="/account/?q=verification"
			>
				<Badge name="Unverified" class="!bg-red" />
			</nuxt-link>
			<Badge
				v-else
				:name="profileData ? `Level ${profileData.profileLevel}` : 'loading...'"
			/> -->
			<!-- <Avatar v-if="user" :name="user.displayName" :src="user.photoURL" /> -->

			<div ref="target" class="flex flex-col relative">
				<div
					class="cursor-pointer flex items-center gap-2.5 rounded p-1.5 bg-gray-100"
					@click="toggleMenu"
				>
					<Avatar v-if="user" :name="user.displayName" :src="user.photoURL" />
					<div class="flex flex-col">
						<span class="text-sm font-semibold text-primary truncate w-20">{{ user.displayName }}</span>
					</div>
					<down
						:class="[
							'ml-1 w-6 duration-300',
							showMenu ? 'rotate-180' : '',
						]"
					/>
				</div>
				<transition name="slide" appear :duration="500">
					<div
						v-if="showMenu"
						mode="out-in"
						class="bg-white z-20 px-4 shadow text-sm absolute top-[3.5rem] right-0 border border-primary w-72 rounded p-4"
					>
						<div class="flex flex-col pb-1 pt-2.5 gap-4 ">
							<nuxt-link
								to="/shop"
								class="cursor-pointer flex items-center text-greyDark text-base font-medium"
							>
								<shop class="w-6 text-greyDark mr-4" />
								Switch to Shop dashboard
							</nuxt-link>
							<nuxt-link
								to="/service"
								class="cursor-pointer flex items-center text-greyDark text-base font-medium"
							>
								<service class="w-6 text-greyDark mr-4" />
								Switch to Service dashboard
							</nuxt-link>
							<button
								class="cursor-pointer flex items-center  text-base font-medium"
								@click="useAuthModal().openLogout()"
							>
								<signOut class="w-6 mr-4" />
								Sign Out
							</button>
						</div>
					</div>
				</transition>
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
import down from '~~/src/assets/icons/src/down.vue'
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
