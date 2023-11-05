<script setup>
defineProps(["data"]);

import { useCounterStore } from "@/stores/counter.js";

const counterStore = useCounterStore();
</script>
<template>
	<div class="tango_container">
		<p class="tango_txt" @click="counterStore.toggle">
			{{ data[counterStore.index][counterStore.isJA ? "ja" : "en"] }}
		</p>
		<div class="prev" @click="counterStore.prev">&lt</div>
		<div class="next" @click="counterStore.next">&gt</div>
	</div>
</template>
<style scoped>
.tango_container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: max(300px, 90%);
	max-height: 90%;
	aspect-ratio: 1 / 1;
	border-radius: 8px;
	border: 1px solid #ccc;
	position: relative;
	padding: 0 50px;
}
.tango_txt {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	font-size: 24px;
	text-align: center;
	user-select: none;
}
.prev {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	width: 50px;
	height: 150px;
	user-select: none;
}
.prev:hover {
	background-color: #eee;
}
.next {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	width: 50px;
	height: 150px;
	user-select: none;
}
.next:hover {
	background-color: #eee;
}
</style>
