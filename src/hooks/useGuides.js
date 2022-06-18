import { ref, onMounted, onUnmounted, computed } from "vue";
import { Log, countEmpty, get, groupBy } from "../helpers";
import { getRecords } from "./airtable";

export default function useBuilds() {
  const checklist = ref(initial);
  const builds = ref([]);
  const parts = ref([]);

  const loading = ref(false);
  const error = ref("");

  onMounted(async () => {
    loading.value = true;

    builds.value = await getRecords("Builds", 5);
    parts.value = await getRecords("Parts", 50);

    loading.value = false;
  });
}
