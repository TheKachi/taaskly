<template>
	<Modal
		modal="$atts.modal"
		title="Share Task"
	>
		<section class="flex flex-col gap-4">
			<button class="btn font-semibold bg-slate-800 text-white w-full">
				<span class="w-64 flex items-center">
					<icon class="w-6 mr-2" name="clipboard" />
					Copy to Clipboard
				</span>
			</button>
			<button class="btn font-semibold bg-[#075e54] text-white w-full">
				<span class="w-64 flex items-center">
					<icon class="w-6 mr-2" name="whatsapp_outline" />
					Whatsapp
				</span>
			</button>
			<button class="btn font-semibold bg-[#1DA1F2] text-white w-full">
				<span class="w-64 flex items-center">
					<icon class="w-6 mr-2" name="whatsapp_outline" />
					Twitter
				</span>
			</button>
		</section>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'
import { useVerification } from '@/composables/auth/verification'
import { toBase64 } from '@/composables/useUtils'
const { verify, verificationFormState, loading, percentage, uploadFile } = useVerification()

const name = ref('Choose a File')
		   const update = async (el) => {
			   const file = el.target.files[0]
			   verificationFormState.document.value = file
			   const file_name = el.srcElement.files[0].name
			   name.value = file_name
			   uploadFile()
		   }
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
