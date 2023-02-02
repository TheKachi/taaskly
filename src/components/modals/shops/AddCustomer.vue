<template>
	<Modal
		modal="$atts.modal"
		title="Add customer to order"
		:auto-close="true"
	>
		<div class="max-h-screen overflow-y-auto">
			<div class="flex items-center gap-2">
				<input
					placeholder="Search Customer"
					type="text"
					class="text-sm border py-2 px-4 outline-none rounded-md w-full"
				>
				<button class=" px-4 py-2 text-sm my-auto bg-dark text-light rounded-md">
					New customer
				</button>
			</div>
			<div class=" my-6">
				<p>Select the customer you want to add to this order</p>
				<div class=" border-1  border-t-gray-100 flex gap-2 mt-4">
					<p class="py-3 px-4 border border-black w-auto font-semibold my-auto rounded-md">
						A
					</p>
					<div class="flex flex-col gap-2">
						<p class="font-medium text-md">
							Ayomide
						</p>
						<p class="text-md font-bold">
							09019441762
						</p>
					</div>
				</div>
			</div>

			<!-- <BadgeSmall class="absolute right-0" :name="`${formStep}/ 2`" /> -->
		</div>
	</Modal>
</template>

<script setup lang="ts">

</script>

<style scoped>
.input::before{
	content: var(--tw-content);
    height: 100%;
	width: var(--w);
    background: #35355b76;
	position: absolute;
}
</style>
