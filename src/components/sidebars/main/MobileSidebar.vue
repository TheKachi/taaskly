<template>
	<Modal
		modal="$atts.modal"
		title="Menu"
		type="sidebar"
	>
		<aside
			class=" "
		>
			<div>
				<div class="flex items-center pl-4 mb-4 ">
					<img
						src="/logo-text.svg"
						alt="logo"
						class="h-8"
					>
				</div>

				<p v-if="user" class="text-xl font-medium ml-4 flex flex-col">
					<span class="text-gray-500">Hello</span>
					<span class="text-sm tx flex-wrap">{{ user.displayName?.split(' ')[0] }}</span>
				</p>

				<div class="relative mt-5 pt-4 border-t">
					<div v-for="n in mainRoutes" :key="n.name" class="w-full flex flex-col gap-4">
						<span v-if="!n.children">
							<nuxt-link
								:to="n.route"
								class="flex items-center black"
							>
								<component :is="n.icon" class="mr-4 w-5" />
								<!-- <icon :name="n.icon" class="mr-4 w-5" /> -->
								<p class="text-base">
									{{ n.name }}
								</p>
							</nuxt-link>
						</span>

						<details v-else>
							<summary class="flex py-1.5 items-center px-6 mt-3 duration-75 black">
								<component :is="n.icon" class="mr-4 w-5" />
								<!-- <icon :name="n.icon" class="mr-4 w-5" /> -->
								<p class="text-base font-medium text-gray300">
									{{ n.name }}
								</p>
								<button class="ml-auto rotate-90">
									<svg class="fill-current opacity-75 w-4 h-4 -mr-1 turn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
								</button>
							</summary>

							<div class="flex flex-col">
								<nuxt-link v-for="child in n.children" :key="child.name" :to="child.route" class="flex items-center py-1.5 pl-14 mt-3 duration-75 black">
									<p class="text-sm font-medium">
										{{ child.name }}
									</p>
								</nuxt-link>
							</div>
						</details>
					</div>
					<button
						class="menu-btn flex items-center black !text-[#ff615c] cursor-pointer"
						@click="useAuthModal().openLogout()"
					>
						<exit class="mr-4 w-5" />
						<p class="text-base">
							Sign Out
						</p>
					</button>
				</div>
			</div>
		</aside>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useAuthModal } from '@/composables/core/modals'
import { useUser } from '@/composables/auth/user'
import { mainRoutes } from '@/composables/utils/menu'
import exit from '@/assets/icons/src/exit.vue'
const { user } = useUser()
</script>

<style scoped lang="scss">
a, .menu-btn {
	@apply text-primary w-[240px] h-[51px] px-4 text-base duration-[10ms] rounded

}
/* exact link will show the primary color for only the exact matching link */
a.router-link-exact-active.black {

	color: var(--light);
	background-color: var(--primary);
	font-weight: 500;
	& > svg {
		color: var(--light);
	}
}
.tx{
	overflow-wrap: anywhere;
}
</style>
