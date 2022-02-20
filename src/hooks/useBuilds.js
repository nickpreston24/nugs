import { ref, onMounted, toRefs, reactive, toRef, onUnmounted } from "vue";
import { Log } from "../helpers";
import { getRecords } from "./airtable";

const initial = {
  buffer: {
    spring: null,
    tube: null,
    alt: null,
  },
  upper: {
    handguard: null,
    barrel: null,
    bcg: null,
    gasblock: null,
    gastube: null,
  },
  buttstock: { id: null, brand: "" },
  lower: {
    LPK: {
      brand: "",
    },
  },
};

export default function useBuilds() {
  const checklist = ref(initial);
  const state = ref({
    builds: [],
  });
  const loading = ref(false);
  const error = ref("");

  onMounted(async () => {
    loading.value = true;
    const records = await getRecords("Builds", 5);
    console.log("records", records);
    state.value.builds = records;
    loading.value = false;

    console.log("my builds", state?.value?.builds);
  });

  /**
   * Add Part to the checklist
   */
  const addPart = (part) => {
    const partType = part?.Type || "";
    // const buildType = payload?.BuildType || "AR-15"
    // const attachments = findValue(part, "Attachments", (_, x) => x);

    Log(partType, "partType");
    Log("part", part);
    checklist.value[partType] = part[partType];
    Log("checklist", checklist.value);
  };

  return { addPart, checklist, builds: state?.value?.builds };
}
