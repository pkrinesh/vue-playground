<script setup lang="ts">
import { ref } from 'vue'

defineEmits<{ change: [id: number, name: string] }>()

const data = ref({
	first_name: 'John',
	last_name: 'Reese',
	age: 34,
})

defineSlots<{
	default: (props: { first_name: string; last_name: string; age: number }) => any
}>()
</script>

<template>
	<div>
		<slot v-bind="data"></slot>
	</div>
</template>
