<script setup lang="ts">
/**
 * I read about pre-processor in melt-ui to bind attribute without object spreading
 * You know what Vue has better way of binding attribute without pre-processor
 * I think I will experiment with react-aria and melt ui type lib for vue
 */
const attrs = (name?: string) => ({
	class: 'demo demo-1',
	style: {
		background: name === 'krinesh' ? 'red' : 'purple',
		borderRadius: '10px',
		border: '2px',
		borderColor: 'yellow',
	},
	onClick() {
		console.log('Clicked')
	},
})
</script>

<template>
	<div v-bind="attrs('krinesh')"></div>
</template>

<style scoped>
.demo {
	margin-left: 10rem;
	margin-top: 10rem;
	width: 100px;
	height: 100px;
}
</style>
