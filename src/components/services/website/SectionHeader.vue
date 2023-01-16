<template>
	<div>
		<div class="w-full rounded-t-lg">
			<h4 class="header bg-primary text-light p-3 w-full rounded-t-lg">
				Shop
			</h4>
			<ul class="sublinks bg-light flex flex-col gap-4">
				<li class="">
					<router-link to="?category=all">
						<p class="border-l-2 border-dark py-2 px-4 hover:bg-grey">
							All
						</p>
					</router-link>
					<router-link to="?category=Ebooks">
						<p class="py-2 px-4 hover:bg-grey">
							Ebooks
						</p>
					</router-link>
					<router-link to="?category=custom-category">
						<p class="py-2 px-4 hover:bg-grey">
							Custom Category
						</p>
					</router-link>
					<router-link to="?category=courses">
						<p class="py-2 px-4 hover:bg-grey">
							Courses
						</p>
					</router-link>
					<router-link to="?category=courses">
						<p class="py-2 px-4 hover:bg-grey">
							Physical Products
						</p>
					</router-link>
					<router-link to="?category=courses">
						<p class="py-2 px-4 hover:bg-grey">
							Ebooks to Nigeria
						</p>
					</router-link>
					<router-link to="?category=courses">
						<p class="py-2 px-4 hover:bg-grey">
							Ebooks from Canada
						</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
