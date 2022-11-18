<template>
	<aside
		class="pc min-h-full h-screen  flex-col justify-between w-[20%] max-w-[14rem] bg-transparent py-4 fixed z-50 "
	>
		<div>
			<div class="flex   items-center pr-4 gap-2">
				<img
					src="/logo.svg"
					alt="logo"
					class="w-28 h-10 ml-4"
				>
			</div>

			<div class="relative mt-12">
				<div v-for="n in routes" :key="n.name" class="w-full flex flex-col gap-4">
					<span v-if="!n.children">
						<nuxt-link
							:to="n.route"
							class="flex items-center black"
						>
							<icon :name="n.icon" class="mr-4 w-5" />
							<p class="text-base">
								{{ n.name }}
							</p>
						</nuxt-link>
					</span>

					<details v-else>
						<summary class="flex py-1.5 items-center px-6 mt-3 duration-75 black">
							<icon :name="n.icon" class="mr-4 w-5" />
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
					<icon name="exit" class="mr-4 w-5" />
					<p class="text-base">
						Sign Out
					</p>
				</button>
			</div>
		</div>
	</aside>
</template>

<script lang="ts" setup>
import { useAuthModal } from '@/composables/core/modals'
import { routes } from '@/composables/menu'

</script>

<style scoped lang="scss">
.bg-shadow {
	box-shadow: 0px 2px 16px rgba(31, 41, 55, 0.12);
}
a, .menu-btn {
	@apply text-primary w-[190px] h-11 px-6 text-sm duration-[10ms] rounded mt-1;
&:hover{
	@apply border border-secondary;
}
}
/* exact link will show the primary color for only the exact matching link */
a.router-link-exact-active.black {
	@apply shadow-md ;
	color: var(--clear);
	background-color: var(--primary);
	font-weight: 500;
	& > svg {
		color: var(--clear);
	}
}

details {
	user-select: none;
	& summary svg.turn {
		color: var(--grey);
	}
	& summary svg {
		color: var(--grey);
	}
}
details[open] {
	& summary svg {
		color: var(--grey);
	}
	& summary svg.turn {
		transform: rotate(-180deg);
	}
}
summary {
	cursor: pointer;
}
svg {
	transition: all 0.3s;
}
summary::-webkit-details-marker {
	display: none;
}
:focus {
	outline: none;
}
</style>
