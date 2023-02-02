<template>
	<section class="w-full flex flex-col mt-10 lg:grid lg:grid-cols-12 gap-4 rounded-md min-h-[80vh]">
		<div class="bg-gray-100 w-full lg:col-span-8 p-6 rounded-md">
			<div class="flex justify-between items-center mt-2 mb-8 gap-4">
				<input placeholder="Search Product" type="text" class="input-field-search-product">
				<div ref="target" class="flex flex-col relative">
					<div
						class="cursor-pointer border border-black flex items-center gap-2.5 rounded p-1 bg-white"
						@click="toggleMenu"
					>
						<div class="flex flex-col">
							<span class="text-sm font-semibold text-primary truncate w-20">{{
								currentProductView
							}}</span>
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
							class="bg-white z-20 shadow text-sm absolute top-[3.5rem] right-0 border border-primary w-[150px] rounded overflow-hidden"
						>
							<div class="flex flex-col overflow-hidden">
								<button
									v-for="item in drop_buttons"
									:key="item"
									class="product_control_dropdown"
									@click="setProductCategoryView(item)"
								>
									{{ item }}
								</button>
							</div>
						</div>
					</transition>
				</div>
			</div>
			<div
				v-for="item in topProducts"
				:key="item.title"
				class="flex items-center gap-4 py-4 border-t justify-between hover:bg-white cursor-pointer"
			>
				<div class="flex items-center gap-2">
					<img :src="item.img" :alt="item.title" class="w-[40px] h-[40px] rounded object-cover">
					<div class="flex flex-col">
						<p class="text-sm text-grey_two font-semibold">
							{{ item.title }}
						</p>
						<span>
							<span class="text-sm font-medium">{{ item.unit }} units</span>
							<span class="text-sm ml-2">{{ item.variant }} Variants</span>
						</span>
					</div>
				</div>
				<p class="text-md font-semibold">
					₦{{ item.price }}
				</p>
			</div>
		</div>
		<aside class="col-span-4 bg-gray-100 w-full px-4 py-6 rounded-md flex flex-col justify-between">
			<div class="flex justify-between items-center pb-4">
				<button class="underline text-md" @click="useShopModal().openAddCustomer()">
					Add Customer
				</button>
				<button class=" px-4 py-2 text-sm my-auto bg-red text-light rounded-md ">
					Clear
				</button>
			</div>
			<div class="h-[50vh] overflow-y-auto ">
				<div
					v-for="item in topProducts"
					:key="item.title"
					class="flex w-full items-center gap-3 py-2 border-t justify-between lg:px-2 px-8"
				>
					<div>
						<div class="flex items-center gap-2">
							<img :src="item.img" :alt="item.title" class="w-[40px] h-[40px] rounded object-cover">
							<p class="text-sm text-grey_two font-semibold">
								{{ item.title }}
							</p>
						</div>
						<p class="text-sm ml-12 font-semibold mt-1">
							₦{{ item.price }}
						</p>
					</div>
					<div class="flex flex-col my-auto">
						<div class="flex justify-between items-center border border-primary rounded-md col-span-4 p-2 ">
							<button class="bg-primary text-white rounded-md text-sm">
								<add />
							</button>
							<input type="number" value="3" min="1" class="bg-transparent outline-none w-10 text-center">
							<button class="bg-primary text-white rounded-md text-sm">
								<add />
							</button>
						</div>
						<span class="text-red text-sm mt-2 text-center">Remove Item</span>
					</div>
				</div>
			</div>
			<div class=" border-t pt-8 min-h-[100px]">
				<div class="flex items-center gap-2">
					<input
						placeholder="Search Product"
						type="text"
						class="text-sm border py-2 px-4 outline-none rounded-md w-full"
					>
					<button class=" px-4 py-2 text-sm my-auto bg-dark text-light rounded-md">
						Apply
					</button>
				</div>
				<div class="w-full flex justify-between mt-2 px-1">
					<span class="text-sm">Subtotal</span>
					<span class="text-sm">₦ 13,0000</span>
				</div>
				<div class="w-full flex justify-between mt-2 px-1">
					<span class="text-sm">Shipping fee</span>
					<span class="text-sm">add delivery</span>
				</div>
				<div class="w-full flex justify-between mt-2 px-1 font-bold">
					<span class="text-sm">Total</span>
					<span class="text-sm">₦ 13,0000</span>
				</div>
				<button class=" px-4 py-2 text-sm bg-dark text-light rounded-md flex ml-auto my-4">
					Place order
				</button>
			</div>
		</aside>
	</section>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import Add from '@/assets/icons/src/add.vue'
import down from '@/assets/icons/src/down.vue'
import { useShopModal } from '@/composables/core/modals'

definePageMeta({
	layout: 'shop-default',
	middleware: ['is-authenticated', 'has-profile']
})
const target = ref(null)
const showMenu = ref(false)
const closeMenu = () => (showMenu.value = false)
const toggleMenu = () => (showMenu.value = !showMenu.value)
onClickOutside(target, closeMenu)
const drop_buttons = ref(['All', 'Category-1', 'Category-2'])
const currentProductView = ref(drop_buttons.value[0])
const setProductCategoryView = (str: string) => {
	currentProductView.value = str
	closeMenu()
}
const topProducts = ref([
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA . BHA set', price: '29,000', unit: 2, variant: 0 },
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA . BHA', price: '29,000', unit: 3, variant: 0 },
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA set', price: '29,000', unit: 2, variant: 0 },
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA. BHA set', price: '29,000', unit: 2, variant: 0 },
	{ img: 'https://res.cloudinary.com/bazaar-technologies/image/upload/v1662379844/nivcqob2gwtjg6iakspa.jpg', title: 'Dr rashel AHA . BKA set', price: '29,000', unit: 2, variant: 0 }
])
</script>

<style scoped>

</style>
