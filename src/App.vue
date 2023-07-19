<script setup lang="ts">
// TODO: vue-router integration
import { ref } from 'vue'
import TheName, { type TNameProps } from './components/TheName.vue'
import TheScopedSlot from './components/TheScopedSlot.vue'

const data = ref<TNameProps>({ name: 'Krinesh', age: 27 })
</script>

<template>
	<main>
		<h1 class="heading">Personal Vue Playground</h1>
		<p>{{ data.name }} {{ data.age }}</p>
		<TheName :name="'Krupa'" :age="26" />
		<TheScopedSlot>
			<template #default="{ first_name, last_name, age }">
				<p>{{ first_name }} {{ last_name }} age: {{ age }}</p>
			</template>
		</TheScopedSlot>
	</main>
</template>

<style scoped>
.heading {
	margin-top: 2rem;
	text-align: center;
}

main {
	display: grid;
	place-items: center;
}
</style>
