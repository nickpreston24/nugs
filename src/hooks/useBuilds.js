import { ref, onMounted, onUnmounted, computed } from "vue";
import { Log, empties, get, deepCount, groupBy } from "../helpers";
import { getRecords } from "./airtable";

const initial = {
  Lower: null,
  Barrel: null,
  Handguard: null,
  Upper: null,
  Buttstock: null,
  Brace: null,
  "Charging Handle": null,
  BufferSpring: null,
  Buffer: null,
  BufferTube: null,
  "Pivot Pins": null,
  BCG: null,
  Magazine: null,
  "Gas Block": null,
  "Buffer Retainer": null,
  "Gas Tube": null,
  LPK: null,
};

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

  /**
   * Add Part to the checklist
   */
  const addPart = (part) => {
    const partType = part?.Type || "";
    checklist.value[partType[0]] = part;
  };

  const completedSteps = computed(() => totalEntries.value - incomplete.value);
  // const totalSteps = computed(() => 15);

  const percentCompleted = computed(
    () => (completedSteps.value / totalEntries.value) * 100.0
  );

  // const majorParts = computed(() => Object.keys(checklist.value));
  const groupedParts = computed(() => groupBy(parts.value, "Type"));

  const partTypes = computed(() => {
    const list = parts.value;
    const types = [].flatten(list.filter((r) => r.Type).map((j) => j.Type));
    //dedupe
    return types.filter((a, i) => types.findIndex((s) => a === s) === i);
  });

  const incomplete = computed(() => empties(checklist.value));

  const totalEntries = computed(() => {
    // for now...
    return Object.keys(checklist.value)?.length;

    // return deepCount(initial);
    // let total = 0;
    // total += deepCount(Object.keys(initial?.buffer));
    // total += deepCount(Object.keys(initial?.upper));
    // total += deepCount(Object.keys(initial?.lower));
    // total += deepCount(Object.keys(initial?.buttstock || {}));

    // return total;
  });

  return {
    builds,
    parts,
    loading,
    error,
    addPart,
    checklist,
    percentCompleted,
    incomplete,
    partTypes,
    totalEntries,
    groupedParts,
  };
}
