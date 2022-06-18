import { ref, onMounted, computed, toRefs } from "vue";
import { countEmpty, groupBy, isArray } from "../helpers";
import { getRecords } from "./airtable";
import { range } from "../hooks/useRange";

const modes = {
  RANDOM: "random",
  CUSTOM: "custom",
};

const storage = null; //localStorage.getItem('current-build')
// console.log('storage', localStorage.getItem('current-build'))

const initial = storage
  ? storage
  : {
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
// const exclusions = ['Sling', 'Magazine', 'Glock', 'Mod']

export default function useBuilds() {
  const checklist = ref({ ...initial });
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
    // console.log('initial', initial)
    Object.assign(checklist.value, initial);
    // console.log('checklist', checklist)
    buildMode.value = modes.CUSTOM;
  };

  /**
   * Add Part to the checklist
   */
  const addPart = (part) => {
    const partType = part?.Type || "";
    const typeName = isArray(partType) ? partType[0] : partType;
    checklist.value[typeName] = { ...part, selected: true };

    // save to localstorage for now:
    // localStorage.setItem('current-build', checklist)
  };

  const completedSteps = computed(() => totalEntries.value - incomplete.value);

  const percentCompleted = computed(
    () => (completedSteps.value / totalEntries.value) * 100.0
  );

  const groupedParts = computed(() => {
    let list = parts.value;
    // console.log('list', list)
    let groups = groupBy(list, "Type");

    const types = Object.keys(initial);
    types.forEach((type) => {
      // console.log('groups[type]', groups[type])
      let subgroup = groups[type];
      // console.log('type', type)
      let next = {
        Name: "< None >",
        Cost: 0.0,
        Attachments: [],
        Type: type,
        Caliber: null,
      };
      // console.log('next', next)
      subgroup?.unshift(next);
    });

    return groups;
  });

  const partTypes = computed(() => {
    // A) from db:

    // const list = parts.value
    // const types = [].flatten(
    //   list
    //     .filter((part) => part.Type)
    //     .filter((element) => exclusions.indexOf(element) < 0)
    //     .map((part) => part.Type)
    // )
    // console.log('types', types)

    //dedupe
    // return types.filter((a, i) => types.findIndex((s) => a === s) === i)

    // B) hard-coded
    return Object.keys(initial);
  });

  const incomplete = computed(() => countEmpty(checklist.value));

  const totalEntries = computed(() => {
    // for now...
    return Object.keys(checklist.value)?.length;
  });

  const picks = computed(() => {
    const result = new Map(Object.entries(checklist.value));
    return result;
  });

  const buildCost = computed(() => {
    let result = Object.values(checklist.value).map((x) => x?.Cost);
    const cost = result.reduce((count, n) => {
      if (!!n) count += n;
      return count;
    }, 0);

    return cost.toFixed(2);
  });

  const isWithinBudget = computed(() => {
    console.log("range.value", range.value);
    return range?.[0]?.value <= buildCost?.value <= range?.[1]?.value; //|| false
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
    picks,
    percentCompleted,
    incomplete,
    partTypes,
    totalEntries,
    groupedParts,
    buildMode,
    clear,
    completedSteps,
    buildCost,
    isWithinBudget,
  };
}
