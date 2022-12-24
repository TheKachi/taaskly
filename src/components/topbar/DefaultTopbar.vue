<template>
	<nav
		class="fixed top-0 bg-transparent  h-16 mx  flex items-center justify-between box-border "
	>
		<icon
			class="mobile w-8 cursor-pointer z-50"
			name="menu"
			@click="useSidebarModal().openMobileSidebar()"
		/>

		<h1 class="font-semibold text-xl capitalize pc">
			{{ $route.name }}
		</h1>

		<div class="flex items-center gap-4">
			<!-- <Badge :name="profileData?.profileLevel ? profileData?.profileLevel : 'loading...'" class="text-base hidden sm:block" /> -->
			<nuxt-link
				v-if="profileData && profileData.verifiedLevel === 0"
				to="/account/?q=verification"
			>
				<Badge name="Unverified" class="!bg-red" />
			</nuxt-link>
			<Badge
				v-else
				:name="profileData ? `Level ${profileData.profileLevel}` : 'loading...'"
			/>

			<VDropdown
				:distance="14"

				class="cursor-pointer"
			>
				<Avatar v-if="user" :name="user.displayName" :src="user.photoURL" />
				<template #popper>
					<div class="w-full p-4">
						<button
							class="menu-btn flex items-center black !text-[#ff615c] cursor-pointer"
							@click="useAuthModal().openLogout()"
						>
							<icon name="exit" class="mr-4 w-5" />
							<p class="text-base">
								Sign Out
							</p>
						</button>
					</div>
				</template>
			</VDropdown>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useAuthModal, useSidebarModal } from '@/composables/core/modals'
import { useUser } from '@/composables/auth/user'
import { useProfile } from '@/composables/auth/profile'
const { user } = useUser()

const { getProfile, loading, profileData } = useProfile()
onMounted(getProfile)
</script>

<style scoped lang="scss">
nav {
	background-color: rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(15px);
}

.mx{
	left: min(20.5%, 15.1rem);
	right: min(21%, 28rem);
	padding: 0 1rem;
	@media (max-width:1024px){
		left: 0;
		right: 0;
		width: 100%;
		padding: 0 1rem;
	}
}
</style>
