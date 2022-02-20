import { ref, onMounted, toRefs, reactive, toRef } from "vue";
import axios from "axios";
import { Log } from "../helpers";

const apiKey = "keyl5Wo5ETa4HR4tt"; //import.meta.env.VITE_VERCEL_AIRTABLE_API_KEY;
const baseKey = "app33DDBeyXEGRflo"; //import.meta.env.VITE_VERCEL_BASE_KEY;

export const formatRecords = (records = []) => {
  let collection = [].concat(records);

  const format = (record) => {
    if (!record) return {};
    let { id, fields } = record;
    return {
      id,
      ...fields,
    };
  };
  let result =
    collection.length > 0 ? collection.map(format) : format(collection);

  return result;
};

/** A reactive generic repository */
export default function useTable(
  tableName = "Parts",
  { maxRecords = 10 } = {}
) {
  Log(maxRecords, "maxRecords");

  const state = ref({
    records: [], //the current state for whatever table you're on.
    table: tableName, // current table
    maxRecords,
  });

  const loading = ref(false);
  const error = ref("");

  onMounted(async () => {
    loading.value = true;

    axios({
      url: `https://api.airtable.com/v0/${baseKey}/${tableName}?maxRecords=${maxRecords}`,
      headers: {
        "Content-Type": "x-www-form-urlencoded",
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((result) => {
        // console.log("result", result);
        let raw = formatRecords(result?.data?.records);
        state.value.records = raw;
        Log(state.value.records);
        // devmode && console.log("state.value.records", state.value.records);
        loading.value = false;
      })
      .catch((error) => {
        loading.value = false;
        error.value = error;
      });
  });

  const searchTable = async (tableName = "Parts", options = { fields: [] }) => {
    loading.value = true;

    Log("options :>> ", options);
    let url = `https://api.airtable.com/v0/${baseKey}/${tableName}?`;
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if (i > 0) {
        url.concat(`&`);
      }
      url.concat(`fields%5B%5D=${field}`);
    }

    Log("url", url);
    axios({
      url,
      headers: {
        "Content-Type": "x-www-form-urlencoded",
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((result) => {
        Log(result);
        let raw = formatRecords(result?.data?.records);
        state.value.records = raw;

        Log("state.value.records", state.value.records);
      })
      .catch((error) => {
        loading.value = false;
        error.value = error;
      });

    // if (tableName)
    //     current.table = tableName;
    // const atPageCursor = pagify(current.table, options);
    // let filter = options?.filter ? options.filter : x => x;
    // // console.log('filter :>> ', filter);
    // try {
    //     // nextPage return a promise that resolves to an array of Record objects.
    //     let atResultsPage = await atPageCursor.nextPage();
    //     let pages = [];
    //     while (atResultsPage && atResultsPage.length) {
    //         // Process this page.
    //         const records = atResultsPage
    //         pages.push(formatRecords(records))
    //         // Get next set
    //         atResultsPage = await atPageCursor.nextPage();
    //     }
    //     let allPages = pages.reduce((a, b) => concat(a, b))
    //     // console.log("All Pages :>> ", allPages)
    //     console.log('BEFORE: ', state)
    //     current.records = allPages
    //     console.log('AFTER :>> ', state)
    // } catch (err) {
    //     // Errors thrown from the nextPage call would be caught here.
    //     alert(err);
    // }
  };

  const getById = async (id, table = null) => {
    Log(id);
    if (table) state.value.table = table;

    let record = await get(state.value.table, id).catch((error) => {
      loading.value = false;
      error.value = error;
    });
    devmode && console.log("record :>> ", record);

    return record;
  };

  const patch = (table = null, data = null) => {
    if (table) state.value.table = table;
    loading.value = true;
    const url = `https://api.airtable.com/v0/${baseKey}/${table}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };
    axios
      .patch(url, data, headers)
      .then((result) => {
        Log(result);
        let raw = formatRecords(result?.data?.records);
        state.value.records = raw;
        Log("state.value.records", state.value.records);
      })
      .catch((error) => {
        loading.value = false;
        error.value = error;
      });
  };

  const create = (table = null, record) => {
    const data = {
      records: [
        {
          fields: record?.fields || {},
        },
      ],
    };

    let url = "https://api.airtable.com/v0/" + baseKey + "/" + table;
    let axiosConfig = {
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
    };
    axios
      .post(url, data, axiosConfig)
      .then((result) => {
        Log(result);
        let raw = formatRecords(result?.data?.records);
        state.value.record = raw;
        Log("state.value.records", state.value.records);
      })
      .catch((error) => console.log(error));

    // if (!table) return;
    // if (table) state.value.table = table;
    // loading.value = true;
    // Log(data, "data")
    // // const url = `https://api.airtable.com/v0/${baseKey}/${table}`;
    // const url = "https://api.airtable.com/v0/app33DDBeyXEGRflo/Builds"
    // const headers = {
    //     'Authorization': `Bearer keyl5Wo5ETa4HR4tt`,
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    // };

    // Log('url', url)
    // // Log('apikey', apiKey)

    // axios.post(url, data, headers).then((result) => {
    //     Log(result)
    //     let raw = formatRecords(result?.data?.records);
    //     state.value.record = raw;
    //     Log("state.value.records", state.value.records);
    // }).catch(error => {
    //     loading.value = false;
    //     error.value = error;
    // })
  };
  return {
    // state objects
    state,
    loading,
    error,
    // api
    searchTable,
    getById,
    patch,
    create,
  };
}
