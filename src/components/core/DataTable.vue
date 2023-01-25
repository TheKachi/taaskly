<template>
	<div v-if="now" class="rounded-md bg-gray-100  flex flex-col overflow-hidden">
		<div class="flex flex-col gap-4 md:flex-row md:items-center justify-between p-6">
			<div class="w-full md:w-fit h-fit relative">
				<input type="text" class="p-2 pl-16 bg-light w-full md:w-[300px] rounded-md focus:outline-none">
				<search class="absolute top-1/2 left-4 -translate-y-1/2" />
			</div>
			<div class="flex gap-4">
				<button class="p-2 px-3 min-w-[90px] bg-light rounded-md text-primary text-sm">
					Filter
				</button>
				<button class="p-2 px-3 min-w-[90px] bg-light rounded-md text-primary text-sm flex items-center gap-2">
					<add />
					Create {{ dataType }}
				</button>
			</div>
		</div>

		<div v-if="!data.length" class="min-h-[300px] flex items-center justify-center">
			<div class="flex flex-col gap-3 items-center text-sm text-center">
				<p class="text-primary text-lg font-bold">
					No {{ dataType }} found
				</p>
				<p v-if="dataType == 'Order' || dataType == 'Customer'" class="text-primary">
					No {{ dataType }} found, share your store to start <br> receiving {{ dataType }}
				</p>
				<p v-else class="text-primary">
					No {{ dataType }} found, click on Create Product to start <br> adding {{ dataType }}s
				</p>
				<button v-if="dataType == 'Order' || dataType == 'Customer'" class="p-2 px-3 min-w-[90px] bg-light rounded-md text-primary text-sm">
					Share store
				</button>
			</div>
		</div>

		<div v-else class="flex flex-col">
			<div class="flex flex-col w-full overflow-auto">
				<!-- <div class="w-full flex min-w-[800px] p-4 py-2">
					<input type="checkbox" class="mr-[20px]">
					<p
						v-for="item,index in tableHeader"
						:key="index"
						class="text-sm border"
						:style="{ width: width[index] }"
					>
						{{ item }}
					</p>
					<p class="text-sm min-w-[25%]">
						EMAIL
					</p>
					<p class="text-sm min-w-[20%]">
						PHONE
					</p>
					<p class="text-sm min-w-[20%]">
						TOTAL SPENT
					</p>
					<div class="text-sm w-[70px] border" />
				</div>

				<div
					v-for="item, index in data"
					:key="index"
					class="w-full flex min-w-[800px] p-4 py-2"
					:class="{'bg-light': index%2 == 0}"
				>
					<input type="checkbox" class="mr-[20px]">
					<p
						v-for="tableItem, tableIndex in tableHeader"
						:key="tableIndex"
						class="text-sm border"
					>
						{{ item.name }}
					</p>
					<p class="text-sm min-w-[25%] border">
						{{ item.email }}
					</p>
					<p class="text-sm min-w-[20%] border">
						{{ item.phone }}
					</p>
					<p class="text-sm min-w-[20%] border">
						#{{ item.amount }}
					</p>
					<span class="text-sm w-[70px] border">
						<dashboard />
					</span>
				</div> -->
				<table class="w-full min-w-[800px]">
					<tr class="">
						<!-- <th> -->
						<input type="checkbox" class="w-[30px]">
						<!-- </th> -->
						<th
							v-for="item in tableHeader"
							:key="item"
							class="text-left font-medium"
						>
							{{ item }}
						</th>
						<th class="w-[70px]" />
					</tr>
					<tr
						v-for="item, index in filteredData"
						:key="index"
						:class="{'bg-light': index%2 == 0}"
					>
						<!-- <td> -->
						<input type="checkbox" class="w-[30px]">
						<!-- </td> -->
						<td
							v-for="row in Object.values(item)"
							:key="(row as any)"
						>
							{{ row }}
						</td>
						<td class="w-[70px] !p-0">
							<dashboard />
						</td>
					</tr>
				</table>
			</div>

			<div class="p-4 py-2 flex justify-end bg-gray-300">
				<div class="flex gap-4">
					<div class="flex gap-1">
						<p class="text-sm">
							Rows per page:
						</p>
						<select v-model="rowPerPage" class="w-[30px]" @change="backToPageOne">
							<option :value="10">
								10
							</option>
							<option :value="20">
								20
							</option>
							<option :value="30">
								30
							</option>
						</select>
					</div>
					<p class="text-sm text-primary">
						{{ start+1 }} to {{ onScreenEndValue }} of {{ data.length }}
					</p>

					<div class="flex items-center gap-4">
						<add @click="prevPage" />
						<add @click="nextPage" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else class="bg-white p-4 flex flex-col gap-8">
		<div class="flex items-center justify-between">
			<skeleton width="300px" height="40px" radius="5px" />
			<div class="flex items-center gap-4">
				<skeleton width="120px" height="40px" radius="5px" />
				<skeleton width="120px" height="40px" radius="5px" />
			</div>
		</div>
		<div class="flex flex-col gap-6">
			<div
				v-for="i in 10"
				:key="i"
				class="flex items-center justify-between"
			>
				<skeleton width="200px" height="30px" radius="5px" />
				<skeleton width="200px" height="30px" radius="5px" />
				<skeleton width="200px" height="30px" radius="5px" />
				<skeleton width="200px" height="30px" radius="5px" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import skeleton from './skeleton.vue'
import search from '@/assets/icons/src/clipboard.vue'
import dashboard from '@/assets/icons/src/dashboard.vue'
import add from '@/assets/icons/src/add.vue'
import { useTable } from '@/composables/utils/table'

const now = ref(false)
const props = defineProps({
	tableHeader: {
		type: Array as PropType<string[]>,
		required: true
	},
	data: {
		type: Array as PropType<object[]>,
		required: true
	},
	dataType: {
		type: String as PropType<'Order' | 'Customer' | 'Product'>,
		required: true
	}
})
const { nextPage, prevPage, filteredData, onScreenEndValue, start, rowPerPage, backToPageOne } = useTable(props.data)

onMounted(() => {
	setTimeout(() => {
		now.value = true
	}, 700)
})
</script>

<style scoped>
tr{
	height: 40px;
}
th{
	padding: 0;
}
th, td {
  padding-left: 20px;
}

</style>
