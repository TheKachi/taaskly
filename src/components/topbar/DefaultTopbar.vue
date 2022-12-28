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
			<Avatar v-if="user" :name="user.displayName" :src="user.photoURL" />
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

const topbarName = computed(() => useRoute().name)
</script>

<style scoped lang="scss">

</style>
