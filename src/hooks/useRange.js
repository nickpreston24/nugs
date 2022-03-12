import { ref, onMounted } from "vue";
import { useStorage } from "@vueuse/core";

const initialRange = [0, 9000];
const storage = useStorage(initialRange);

export default function useRange() {
  const range = ref(initialRange);

  onMounted(() => {
    console.log("storage.value", storage.value);
    // range.value = window.localStorage.getItem(
    //   "range",
    //   JSON.stringify(range.value)
    // );
  });

  return {
    range,
  };
}
