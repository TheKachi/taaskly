<template>
	<nav class="absolute top-0 bg-transparent w-full right-0  h-16 pl pr-4 flex items-center justify-between">
		<icon
			class="mobile w-8 cursor-pointer z-50"
			name="menu"
			@click="useSidebarModal().openMobileSidebar()"
		/>
		<h1 class="font-medium text-xl capitalize ">
			{{ $route.name }}
		</h1>

		<div class="flex items-center gap-4">
			<p class="text-base hidden sm:block">
				{{ user.displayName }}
			</p>
			<Avatar :name="user.displayName" />
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/auth/user'
import { useSidebarModal } from '@/composables/core/modals'
const { user } = useUser()

</script>

<style scoped lang="scss">
.pl{
	padding-left: min(21%, 15.5rem);
	@media (max-width: 1024px){
		padding-left: 16px;
	}
}
</style>
