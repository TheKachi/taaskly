// composable for servive profile form
const profileFormStep = ref(1)
const createProfileForm = {
	links: ref([]),
	about: ref(''),
	headerImage: ref(''),
	profileImage: ref(''),
	hobbies: ref([]),
	keywords: ref([]),
	possibleJobs: ref([]),
	availabilityStartTime: ref(''),
	availabilityEndTime: ref('')
}
export const useServiceProfileForm = (type: 'create' | 'edit') => {
	const loading = ref(false)
	if (profileFormStep.value === 1) {
		profileFormStep.value = 2
		return
	}
	const create = async () => {
		console.log('createprofileForm', createProfileForm)
	}
	return { profileFormStep, createProfileForm, create, loading }
}
