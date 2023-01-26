<template>
	<div v-if="!loading" class="rounded bg-gray-100  flex flex-col overflow-hidden">
		<slot name="option" />
		<div class="flex flex-col">
			<div v-if="data.length" class="flex flex-col w-full overflow-auto">
				<table class="w-full min-w-[800px]">
					<tr class="">
						<th>
							<input type="checkbox" class="">
						</th>
						<th
							v-for="item in tableHeader"
							:key="item.text"
							class="text-left font-medium"
							:style="`width: ${item.width}%;`"
						>
							{{ item.text }}
						</th>
						<th class="w-[70px] !p-0 invisible text-left">
							Action
						</th>
					</tr>
					<tr
						v-for="item, index in data"
						:key="index"
						:class="[index%2 == 0 ? 'bg-light' : '']"
					>
						<td>
							<input type="checkbox" class="">
						</td>
						<td
							v-for="row in Object.values(item)"
							:key="(row as any)"
						>
							{{ row }}
						</td>
						<td class="w-[70px] !p-0">
							<add />
						</td>
					</tr>
				</table>
			</div>

			<div v-else class="min-h-[270px] flex items-center justify-center">
				<slot name="empty" />
			</div>
		</div>
	</div>
	<div v-else class="bg-white p-4 flex flex-col gap-8">
		<div class="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
			<skeleton width="300px" height="40px" radius="5px" />
			<div class="flex items-center gap-4">
				<skeleton width="120px" height="40px" radius="5px" />
				<skeleton width="120px" height="40px" radius="5px" />
			</div>
		</div>
		<div class="flex flex-col gap-6 min-w-[800px]">
			<div
				v-for="i in 8"
				:key="i"
				class="flex items-center justify-between"
			>
				<skeleton width="170px" height="30px" radius="5px" />
				<skeleton width="170px" height="30px" radius="5px" />
				<skeleton width="170px" height="30px" radius="5px" />
				<skeleton width="170px" height="30px" radius="5px" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import skeleton from './skeleton.vue'
import add from '@/assets/icons/src/add.vue'

defineProps({
	tableHeader: {
		type: Array as PropType<{text:string;width:string}[]>,
		required: true
	},
	data: {
		type: Array as PropType<object[]>,
		required: true
	},
	loading: {
		type: Boolean,
		required: true
	}
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
