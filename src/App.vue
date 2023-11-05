<script setup>
import TangoContent from "@/components/tangoContent.vue";
import { useCounterStore } from "@/stores/counter.js";
import { ref } from "vue";
import json_data from "./assets/KOUKI_SUUCHIKAISEKI.json";

const counterStore = useCounterStore();

const data = ref(json_data);
counterStore.setLength(data.value.length);

document.body.addEventListener("keydown", e => {
	if (e.key === "ArrowLeft" || e.key === "a") {
		counterStore.prev();
	} else if (e.key === "ArrowRight" || e.key === "d") {
		counterStore.next();
	} else if (e.key === " ") {
		counterStore.toggle();
	}
});
</script>

<template>
	<div class="container">
		<tango-content :data="data" />
	</div>
</template>

<style scoped>
.container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}
</style>
