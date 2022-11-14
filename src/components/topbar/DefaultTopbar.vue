<template>
	<nav class="absolute top-0 bg-transparent w-full right-0  h-16 pl pr-6 flex items-center justify-between">
		<h1 class="font-medium text-xl capitalize ">
			{{ $route.name }}
		</h1>

		<div class="flex items-center gap-4">
			<p class="text-base ">
				{{ user.displayName }}
			</p>
			<Avatar :name="user.displayName" />
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/auth/user'
const { user } = useUser()

</script>

<style scoped>
.pl{
	padding-left: min(20%, 14rem);
}
</style>
