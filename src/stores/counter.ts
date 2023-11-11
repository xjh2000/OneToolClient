import { ref, computed, watchEffect } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref<number | null>(null);
  const doubleCount = computed(() => (count.value ? count.value * 2 : 0));
  function increment() {
    if (count.value !== null) {
      count.value++;   
      }
  }
  watchEffect(() => {
    if (!localStorage["count"]) {
      localStorage["count"] = 0;
    }
    if (count.value === null) {
      count.value = Number(localStorage["count"]);
    }
    if (count.value !== null) {
      localStorage["count"] = count.value;
    }
  });
  
  return { count, doubleCount, increment };
});
