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
		<!-- <p>{{ data.name }} {{ data.age }}</p> -->
		<TheName v-bind="data" />
		<TheName v-bind="{ name: 'Krupa', age: 27, address: '' }" />
		<TheScopedSlot>
			<template #default="props">
				<p>{{ props.first_name }} {{ props.last_name }} {{ props.age }}</p>
				<button @click="props.onIncreaseAge">Add to Age</button>
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
