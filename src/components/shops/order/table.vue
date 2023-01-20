<template>
	<div class="rounded bg-gray-100  flex flex-col gap-4 overflow-hidden">
		<div class="flex flex-col gap-4 md:flex-row md:items-center justify-between p-6">
			<div class="w-full md:w-fit h-fit relative">
				<input type="text" class="p-2 pl-16 bg-light w-full md:w-[300px] rounded focus:outline-none">
				<search class="absolute top-1/2 left-4 -translate-y-1/2" />
			</div>
			<div class="flex gap-4">
				<button class="p-2 px-3 min-w-[90px] bg-light rounded text-primary text-sm">
					Filter
				</button>
				<button class="p-2 px-3 min-w-[90px] bg-light rounded text-primary text-sm">
					Create Order
				</button>
			</div>
		</div>

		<div v-if="false" class="min-h-[300px] flex items-center justify-center">
			<div class="flex flex-col gap-4 items-center text-sm text-center">
				<p class="text-primary font-medium">
					No order found
				</p>
				<p class="text-primary">
					No order found, share your store to start <br> receiving order
				</p>
				<button class="p-2 px-3 min-w-[90px] bg-light rounded text-primary text-sm">
					Share store
				</button>
			</div>
		</div>

		<div v-else class="flex flex-col">
			<div class="flex flex-col w-full overflow-auto">
				<div class="w-full flex justify-between min-w-[800px] p-4 py-2">
					<input type="checkbox" class="mr-[20px]">
					<p class="text-sm w-[30%]">
						NAME
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
					<div class="text-sm min-w-[5%]" />
				</div>

				<div
					v-for="item, index in items"
					:key="index"
					class="w-full flex justify-between min-w-[800px] p-4 py-2"
					:class="{'bg-light': index%2 == 0}"
				>
					<input type="checkbox" class="mr-[20px]">
					<p class="text-sm w-[30%]">
						{{ item.name }}
					</p>
					<p class="text-sm min-w-[25%]">
						{{ item.email }}
					</p>
					<p class="text-sm min-w-[20%]">
						{{ item.phone }}
					</p>
					<p class="text-sm min-w-[20%]">
						#{{ item.amount }}
					</p>
					<span class="text-sm min-w-[5%]">
						<dashboard />
					</span>
				</div>
			</div>

			<div class="p-4 py-2 flex justify-end bg-gray-300">
				<div class="flex gap-4">
					<div class="flex gap-1">
						<p class="text-sm">
							Rows per page:
						</p>
						<select class="w-[30px]">
							<option value="10">
								10
							</option>
							<option value="20">
								20
							</option>
						</select>
					</div>
					<p class="text-sm text-primary">
						1 of 1
					</p>

					<div class="flex items-center gap-4">
						<add />
						<add />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import search from '@/assets/icons/src/clipboard.vue'
import dashboard from '@/assets/icons/src/dashboard.vue'
import add from '@/assets/icons/src/add.vue'

const items = ref([
	{ name: 'Abubakri oluwatunbosun oluwakemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: 'Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: 'Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: 'Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: 'Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: 'Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: 'Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' },
	{ name: 'Abubakri Sherif Opeyemi', email: 'sherif@gmail.com', phone: '+2349090909090', amount: '4500:00' }
])
</script>
