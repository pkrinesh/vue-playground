<script lang="ts">
export type TNameProps = {
	name: string
	age: number
}
</script>
<script setup lang="ts">
const props = defineProps<TNameProps>()
</script>

<template>
	<p>{{ props.name }} {{ props.age }}</p>
</template>
