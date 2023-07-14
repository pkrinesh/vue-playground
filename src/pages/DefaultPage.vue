<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
	<div class="main-container">
		<header>
			<img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />

			<div class="wrapper">
				<HelloWorld msg="You did it!" />
			</div>
		</header>

		<main>
			<TheWelcome />
		</main>
	</div>
</template>

<style scoped>
.main-container {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;

	font-weight: normal;
}

@media (min-width: 1024px) {
	.main-container {
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 2rem;
		place-items: center;
	}
}

header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>
