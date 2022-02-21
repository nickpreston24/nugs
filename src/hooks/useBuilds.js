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

  /* Optional */

  // Suppressor: null,
  // Sling: null,
  // Scope: null,
  // UPK: null,
  // Earpro: null,
  // Cerakote: null,
};

export default function useBuilds() {
  const checklist = ref(initial);
  const builds = ref([]);
  const parts = ref([]);
  // const build = reactive({
  //   previous: { parts: [] },
  //   current: { parts: [] },
  // });

  const buildMode = ref(modes.CUSTOM);

  const loading = ref(false);
  const error = ref("");

  onMounted(async () => {
    loading.value = true;

    builds.value = await getRecords("Builds", 5);
    parts.value = await getRecords("Parts", 150);

    loading.value = false;
  });

  onUnmounted(async () => {
    // builds = null;
    // parts = null;
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
    // part.selected = !part?.selected;
    // console.log("part.selected", part.selected);

    //TODO: other parts of the same type will become unselected.
    for (let index = 0; index < partType.length; index++) {
      const typeName = partType[index];
      checklist.value[typeName] = part;
    }
  };

  const getRandomBuild = () => {
    buildMode.value = modes.RANDOM;
    let nextChecklist = { ...initial };
    const allParts = parts.value.filter((x) => x?.Type?.length > 0);

    for (const typeName of partTypes.value) {
      const matchingParts = allParts.filter((part) =>
        part.Type?.includes(typeName)
      );
      // console.log("typeName", typeName, "count: ", matchingParts?.length);
      // console.log("matchingParts", matchingParts);

      const picked = random.Shuffle(matchingParts)?.[0];
      // console.log("picked", picked);
      // for (let index = 0; index < allPartsWithTypes.length; index++) {
      //   // const types = element?.Type;
      //   // if (!types) continue;
      nextChecklist[typeName] = { ...picked, selected: true };
      // }
    }

    checklist.value = nextChecklist;
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

    // return deepCount(initial);
    // let total = 0;
    // total += deepCount(Object.keys(initial?.buffer));
    // total += deepCount(Object.keys(initial?.upper));
    // total += deepCount(Object.keys(initial?.lower));
    // total += deepCount(Object.keys(initial?.buttstock || {}));

    // return total;
  });

  // const totalCost = computed(() => {
  //   console.log(
  //     "Object.entries(checklist.value)",
  //     Object.entries(checklist.value)
  //   );
  //   return Object.entries(checklist.value).reduce((total, item) => {
  //     console.log("item", item);
  //     total += item.Cost;
  //   }, 0);
  // });

  const build = computed(() => {
    // console.log("total:>>", totalCost.value);

    // console.log(
    //   "Object.entries(checklist.value)",
    //   Object.entries(checklist.value)
    // );

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
    getRandomBuild,
    buildMode,
    clear,
  };
}
