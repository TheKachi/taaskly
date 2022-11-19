<template>
	<section class="mt-12">
		<h1 class="text-gray-500 font-bold text-2xl border-b pb-2">
			Personalize
		</h1>
		<div class="flex items-center gap-5 mt-8">
			<Avatar :size="70" :name="user.displayName" :src="user.photoURL" />
			<h1 class="text-xl font-medium">
				{{ user.displayName }}
			</h1>

			<h2>Homefdfd</h2>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/auth/user'
const { user } = useUser()
</script>

<style scoped>

</style>
