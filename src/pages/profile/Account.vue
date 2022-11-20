<template>
	<section class="mt-12 py-4">
		<h1 class="page-title">
			Personalize
		</h1>
		<div class="flex items-center gap-5 mt-8">
			<Avatar :size="70" :name="user.displayName" :src="user.photoURL" />
			<h1 class="text-xl font-medium">
				{{ user.displayName }}
			</h1>
		</div>

		<div class="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-x-4 gap-y-8">
			<div class="field">
				<label>
					First Name
				</label>
				<input
					id="first_name"
					:value="profileData ? profileData.first_name : 'loading...'"
					type="text"
					class="input-field"
					disabled
					required
				>
			</div>
			<div class="field">
				<label>
					Last name
				</label>
				<input
					id="last_name"
					:value="profileData ? profileData.last_name : 'loading...'"
					type="text"
					class="input-field"
					disabled
					required
				>
			</div>
			<div class="field">
				<label>
					email
				</label>
				<input
					id="email"
					:value="profileData ? profileData.email : 'loading...'"
					type="text"
					class="input-field"
					disabled
					required
				>
			</div>
			<div class="field">
				<label>
					Phone
				</label>
				<input
					id="phone"
					:value="profileData ? profileData.phone : 'loading...'"
					type="text"
					class="input-field"
					disabled
					required
				>
			</div>
			<div class="field">
				<label>
					Date of Birth
				</label>
				<input
					id="dob"
					:value="profileData ? profileData.dob : 'loading...'"
					type="text"
					class="input-field"
					disabled
					required
				>
			</div>
			<div class="field">
				<label>
					Gender
				</label>
				<input
					id="gender"
					:value="profileData ? profileData.gender : 'loading...'"
					type="text"
					class="input-field"
					disabled
					required
				>
			</div>
			<div class="field">
				<label>
					Are you a student
				</label>
				<input
					id="student"
					:value="profileData ? profileData.student : 'loading...'"
					type="text"
					class="input-field"
					disabled
					required
				>
			</div>
			<div class="field">
				<label>
					University
				</label>
				<input
					id="university"
					:value="profileData ? profileData.university || 'Nill' : 'loading...'"
					type="text"
					class="input-field"
					disabled
					required
				>
			</div>
			<div class="field">
				<label>
					Gender
				</label>
				<input
					id="gender"
					:value="profileData ? profileData.gender : 'loading...'"
					type="text"
					class="input-field"
					disabled
					required
				>
			</div>
			<div class="field">
				<label>
					Description
				</label>
				<textarea
					id="email"
					:value="profileData ? profileData.desc : 'loading...'"
					type="text"
					class="input-field !h-12 py-2"
					disabled
					required
					rows="6"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/auth/user'
import { useProfile } from '@/composables/auth/profile'
const { user } = useUser()

const { getProfile, loading, profileData } = useProfile()
onMounted(getProfile)
</script>

<style scoped>

</style>
