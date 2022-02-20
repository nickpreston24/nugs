import { ref, onMounted, toRefs, reactive, toRef } from "vue";
import axios from "axios";
import { Log } from "../helpers";

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

export default function useBuild() {
  const checklist = ref(initial);

  const loading = ref(false);
  const error = ref("");

  onMounted(async () => {
    loading.value = true;

    loading.value = false;
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

  return { addPart, checklist };
}
