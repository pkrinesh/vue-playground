<script setup lang="ts">
import { Grid } from 'ag-grid-community'
import { ref, watchEffect } from 'vue'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const gridElement = ref(null)
const rowData = ref([
	{ make: 'Toyota', model: 'Celica', price: 35000 },
	{ make: 'Ford', model: 'Mondeo', price: 32000 },
	{ make: 'Porsche', model: 'Boxster', price: 72000 },
])

let gridOptions = {
	columnDefs: [
		{ headerName: 'Make', field: 'make', editable: true },
		{ headerName: 'Model', field: 'model', editable: true },
		{ headerName: 'Price', field: 'price', editable: true },
	],
}

watchEffect(() => {
	if (gridElement.value != null) {
		new Grid(gridElement.value, {
			...gridOptions,
			rowData: rowData.value,
		})
	}
})
</script>

<template>
	<h1>AG Grid From core package</h1>

	<div class="container">
		<div class="ag-theme-alpine grid" ref="gridElement" />
	</div>
</template>

<style scoped>
.grid {
	width: 605px;
	height: 200px;
}
</style>
