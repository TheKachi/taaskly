<template>
	<section class="mt-12">
		<h1 class="text-gray-500 font-bold text-2xl border-b pb-2">
			Verification
			<!-- Level - {{ profileData?.student ? 'Student' : 'Individual' }} -->
		</h1>
		<div class="flex flex-col items-center justify-center gap-5 text-center">
			<img v-if="loading" src="@/assets/images/profile/cloud_face.svg" alt="loading face" class=" mt-12 w-36">
			<div v-else>
				<img v-if="profileData?.verifiedLevel == 0" src="@/assets/images/profile/sad_face.svg" alt="sad face" class=" mt-12 w-36">
				<img v-if="profileData?.verifiedLevel == 1" src="@/assets/images/profile/mid_face.svg" alt="sad face" class=" mt-12 w-36">
				<img v-if="profileData?.verifiedLevel == 2" src="@/assets/images/profile/happy_face.svg" alt="sad face" class=" mt-12 w-36">
			</div>

			<p>{{ loading ? 'Loading...' : textFunct(profileData?.verifiedLevel) }}</p>
			<button v-if="profileData?.verifiedLevel == 0" class="btn-primary" :disabled="loading" @click="profileData.student ? openStudentVerification() : openIndividualVerification()">
				{{ loading ? 'Loading...' : 'Verify' }}
			</button>
		</div>
	</section>
</template>

<script setup lang="ts">

import { useAuthModal } from '@/composables/core/modals'
import { useUser } from '@/composables/auth/user'
import Verification from '@/pages/profile/-Verification.vue'
import { useProfile } from '@/composables/auth/profile'
import verify_animation from '@/assets/animations/verify.json'
const { user } = useUser()
const { openIndividualVerification, openStudentVerification } = useAuthModal()
const { getProfile, loading, profileData } = useProfile()
onMounted(getProfile)

const textFunct = (data) => {
switch (data) {
	case 0:
		return 'You are yet to verify your profile, click the button below to do so.'
	case 1:
		return 'Your Profile verification is currently pending.'
	case 2:
		return 'You are verified, you can now accept / post tasks.'
}
}
</script>

<style scoped>

</style>
