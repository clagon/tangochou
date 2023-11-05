import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
	const index = ref(0);
	const isJA = ref(true);
	const length = ref(1000);
	function next() {
		isJA.value = false;
		index.value++;
		if (index.value > length.value - 1) {
			index.value = length.value - 1;
		}
	}
	function prev() {
		isJA.value = false;
		index.value--;
		if (index.value < 0) {
			index.value = 0;
		}
	}
	function toggle() {
		isJA.value = !isJA.value;
	}
	function setLength(newlength) {
		length.value = newlength;
	}
	return { index, isJA, next, prev, toggle, setLength };
});
