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
		<input class="mode" type="checkbox" id="mode" v-model="counterStore.isDefaultLangJA" />
		<label for="mode" class="mode_txt">
			<span>JA</span>
			<span>-></span>
			<span>EN</span>
		</label>
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
	flex-direction: column;
}
.mode {
	display: none;
}
.mode_txt {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	font-size: 24px;
	border-radius: 9999px;
	border: 1px solid #ccc;
	padding: 10px 30px;
	margin-bottom: 20px;
	gap: 10px;
}
input[type="checkbox"]:checked + .mode_txt {
	flex-direction: row-reverse;
}
</style>
