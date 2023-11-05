import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useCounterStore = defineStore("counter", () => {
	const index = ref(0);
	const isDefaultLangJA = ref(true);
	const isJA = ref(true);
	const length = ref(1000);
	function next() {
		isJA.value = isDefaultLangJA.value;
		index.value++;
		if (index.value > length.value - 1) {
			index.value = length.value - 1;
		}
	}
	watch(isDefaultLangJA, newState => {
		isJA.value = !newState;
	});
	function prev() {
		isJA.value = isDefaultLangJA.value;
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
	return { index, isJA, isDefaultLangJA, next, prev, toggle, setLength };
});
