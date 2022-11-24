<template>
	<nav class="absolute top-0 bg-transparent w-full right-0  h-16 pl pr-4 flex items-center justify-between">
		<icon
			class="mobile w-8 cursor-pointer z-50"
			name="menu"
			@click="useSidebarModal().openMobileSidebar()"
		/>
		<div />
		<!-- <h1 class="font-medium text-xl capitalize ">
			{{ $route.name }}
		</h1> -->

		<div class="flex items-center gap-4">
			<!-- <Badge :name="profileData?.profileLevel ? profileData?.profileLevel : 'loading...'" class="text-base hidden sm:block" /> -->
			<nuxt-link v-if="profileData && profileData.verifiedLevel === 0" to="/profile/?q='verification'">
				<Badge name="Unverified" class="!bg-red" />
			</nuxt-link>
			<Badge v-else :name="profileData ? `Level ${profileData.profileLevel}` : 'loading...'" />
			<Avatar :name="user.displayName" :src="user.photoURL" />
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/auth/user'
import { useSidebarModal } from '@/composables/core/modals'
import { useProfile } from '@/composables/auth/profile'
const { user } = useUser()

const { getProfile, loading, profileData } = useProfile()
onMounted(getProfile)
</script>

<style scoped lang="scss">
.pl{
	padding-left: min(21%, 15.5rem);
	@media (max-width: 1024px){
		padding-left: 16px;
	}
}
</style>
