import { ref, onMounted, onUnmounted, computed, reactive } from "vue";
import { Log, countEmpty, get, deepCount, groupBy } from "../helpers";
import { getRecords } from "./airtable";
import { random } from "../helpers/generators";

const modes = {
  RANDOM: "random",
  CUSTOM: "custom",
};

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
  const buildMode = ref(modes.CUSTOM);

  const loading = ref(false);
  const error = ref("");

  onMounted(async () => {
    loading.value = true;

    builds.value = await getRecords("Builds", 5);
    parts.value = await getRecords("Parts", 100);

    loading.value = false;
  });

  const clear = () => {
    checklist.value = initial;
    build.checklist = initial;
    buildMode.value = modes.CUSTOM;
  };

  /**
   * Add Part to the checklist
   */
  const addPart = (part) => {
    const partType = part?.Type || "";
    checklist.value[partType[0]] = part;
  };

  const completedSteps = computed(() => totalEntries.value - incomplete.value);

  const percentCompleted = computed(
    () => (completedSteps.value / totalEntries.value) * 100.0
  );

  const groupedParts = computed(() => groupBy(parts.value, "Type"));

  const partTypes = computed(() => {
    const list = parts.value;
    const types = [].flatten(list.filter((r) => r.Type).map((j) => j.Type));
    // console.log("types", types);
    //dedupe
    return types.filter((a, i) => types.findIndex((s) => a === s) === i);
  });

  const incomplete = computed(() => countEmpty(checklist.value));

  const totalEntries = computed(() => {
    // for now...
    return Object.keys(checklist.value)?.length;
  });

  const build = computed(() => {
    return {
      ...checklist,
      Name: "Untitled Build",
      Calibers: ["10mm", "8.6 Creedmoor"],
    };
  });

  return {
    builds,
    parts,
    build,
    loading,
    error,
    addPart,
    checklist,
    percentCompleted,
    incomplete,
    partTypes,
    totalEntries,
    groupedParts,
    buildMode,
    clear,
  };
}
