<template>
	<aside
		class="pc min-h-screen   flex-col justify-between w-[20%] max-w-[20rem] bg-transparent  fixed right-0 inset-y-0 z-50 "
	>
		<div class="h-full w-full relative p-4">
			<div class="field w-full">
				<select id="last_name" type="text" class="input-field w-full" placeholder="Filter by" required>
					<option value="" disabled selected>
						Filter by
					</option>
					<option value="">
						Location
					</option>
					<option value="">
						Price
					</option>
					<option value="">
						Rating
					</option>
				</select>
			</div>

			<div class="bg-primary rounded mt-16 flex flex-col gap-3 items-start p-5 text-white">
				<h1 class="font-bold text-xl">
					Create a Shop
				</h1>
				<p class="text-sm">
					Create an online shop in minutes and get access to various tools to help you grow.
				</p>
				<button class="btn bg-light text-primary w-full mt-3">
					Join Waitlist
				</button>
			</div>
			<div class="bg-secondary rounded mt-5 flex flex-col gap-3 items-start p-5 text-dark">
				<h1 class="font-bold text-xl">
					Create a Service
				</h1>
				<p class="text-sm ">
					Create a Service in minutes and get access to various tools to help you grow.
				</p>
				<button class="btn bg-dark w-full mt-3 text-light">
					Join Waitlist
				</button>
			</div>
		</div>
	</aside>
</template>

<script lang="ts" setup>
import { useAuthModal } from '@/composables/core/modals'

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
	color: var(--light);
	background-color: var(--primary);
	font-weight: 500;
	& > svg {
		color: var(--light);
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
