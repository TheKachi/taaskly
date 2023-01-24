import { ref, Ref, computed } from 'vue'

export const useTable = (data:any) => {
	const rows = ref(data)
	const rowPerPage = ref(10)
	const searchTerm = ref() as Ref<string>
	const currentPage = ref(1) as Ref<number>
	const start = ref() as Ref<number>
	const end = ref() as Ref<number>

	const prevPage = () => {
		if (currentPage.value > 1) {
			currentPage.value--
		}
	}

	const nextPage = () => {
		if ((currentPage.value * rowPerPage.value) < rows.value.length) {
			currentPage.value++
		}
	}

	const backToPageOne = () => {
		currentPage.value = 1
	}

	const filteredData = computed(() => {
		return rows.value.filter((row, index) => {
			start.value = (currentPage.value - 1) * rowPerPage.value
			end.value = currentPage.value * rowPerPage.value
			if (index >= start.value && index < end.value) {
				return true
			} else {
				return false
			}
		})
	})

	const onScreenEndValue = computed(() => {
		if (end.value > rows.value.length) {
			return rows.value.length
		} else {
			return end.value
		}
	})

	return { rowPerPage, searchTerm, currentPage, start, end, prevPage, nextPage, backToPageOne, onScreenEndValue, filteredData }
}
