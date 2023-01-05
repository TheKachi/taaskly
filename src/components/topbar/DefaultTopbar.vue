<template>
	<nav
		class="absolute  w-full top-0  h-16 px-4  flex items-center justify-between box-border z-20 bg-white shadow"
	>
		<icon
			class="mobile w-8 cursor-pointer z-50"
			name="menu"
			@click="useSidebarModal().openMobileSidebar()"
		/>

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
					<icon
						name="down"
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
						class="bg-white z-[1000000000] px-4 bg-shadow text-sm font-light absolute top-[2.5rem] right-0 bsha border-divider w-[232px] rounded-[10px] pt-3 pb-4"
					>
						<div class="flex flex-col pb-1 pt-2.5 gap-4 mt-4">
							<div
								class="cursor-pointer flex items-center text-greyDark text-base font-medium"
								@click="$router.push('/auth/business')"
							>
								<icon name="add" class="w-6 text-greyDark mr-4" />
								New business
							</div>
							<div
								class="cursor-pointer flex items-center text-secondary text-base font-medium"
							>
								<icon name="signOut" class="w-6 mr-4" />
								Sign Out
							</div>
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
