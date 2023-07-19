<script setup lang="ts">
// TODO: vue-router integration
import { ref } from 'vue'
import TheName, { type TNameProps } from './components/TheName.vue'

const data = ref<TNameProps>({ name: 'Krinesh', age: 27 })
</script>

<template>
	<main>
		<h1 class="heading">Personal Vue Playground</h1>
		<p>{{ data.name }} {{ data.age }}</p>
		<TheName :name="'Krupa'" :age="26" />
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
