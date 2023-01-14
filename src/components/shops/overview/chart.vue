<template>
	<div class="lg:col-span-2 min-h-[300px] max-h-[400px] overflow-auto rounded bg-gray-100 p-6 flex flex-col gap-4">
		<div class="flex items-center justify-between">
			<div class="flex flex-col">
				<p class="text-sm font-medium text-grey_two">
					AMOUNT MADE
				</p>
				<h2 class="font-bold text-xl">
					NGN 00:00
				</h2>
			</div>
			<div ref="target" class="flex flex-col relative">
				<div
					class="cursor-pointer border border-black flex items-center gap-2.5 rounded p-1.5 bg-gray-100"
					@click="toggleMenu"
				>
					<div class="flex flex-col">
						<span class="text-sm font-semibold text-primary truncate w-20">{{ currentChartView }}</span>
					</div>
					<down
						:class="[
							'ml-1 w-6 duration-300',
							showMenu ? 'rotate-180' : '',
						]"
					/>
				</div>
				<transition name="slide" appear :duration="500">
					<div
						v-if="showMenu"
						mode="out-in"
						class="bg-gray-100 z-20 shadow text-sm absolute top-[3.5rem] right-0 border border-primary w-[150px] rounded overflow-hidden"
					>
						<div class="flex flex-col overflow-hidden">
							<button
								class="cursor-pointer flex items-center text-base font-medium hover:bg-white p-2"
								@click="setChartView('This week')"
							>
								This week
							</button>
							<button
								class="cursor-pointer flex items-center text-base font-medium hover:bg-white p-2"
								@click="setChartView('This month')"
							>
								This month
							</button>
							<button
								class="cursor-pointer flex items-center text-base font-medium hover:bg-white p-2"
								@click="setChartView('This year')"
							>
								This year
							</button>
						</div>
					</div>
				</transition>
			</div>
		</div>
		<Bar :data="data" :options="options" />
	</div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import down from '~~/src/assets/icons/src/down.vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const target = ref(null)
const showMenu = ref(false)
const closeMenu = () => (showMenu.value = false)
const toggleMenu = () => (showMenu.value = !showMenu.value)
onClickOutside(target, closeMenu)
const currentChartView = ref('This week')
const data = ref({
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{ data: [40, 20, 12, 34, 53, 42, 11] }]
})
const options = ref({
        responsive: true
})

const setChartView = (str:string) => {
	currentChartView.value = str
	closeMenu()
}
</script>
