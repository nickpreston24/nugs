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

export const getRecords = async (tableName, maxRecords = 10) => {
  const result = await axios({
    url: `https://api.airtable.com/v0/${baseKey}/${tableName}?maxRecords=${maxRecords}`,
    headers: {
      "Content-Type": "x-www-form-urlencoded",
      Authorization: `Bearer ${apiKey}`,
    },
  }).catch((error) => {
    Log("airtable error", error);
  });

  return formatRecords(result?.data?.records);
};

export const searchTable = async (
  tableName = "Parts",
  options = { fields: [] }
) => {
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
    })
    .catch((error) => {
      Log("error", error);
    });
};

export const getById = async (id, table = null) => {
  if (!table) return "Table cannot be null!";

  let record = await get(table, id).catch((error) => {
    Log("error", error);
  });

  Log("record :>> ", record);

  return formatRecords(record);
};

export const patch = async (table = null, data = null) => {
  const url = `https://api.airtable.com/v0/${baseKey}/${table}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const request = await axios
    .patch(url, data, headers)

    .catch((error) => {
      Log("error", error);
    });

  return formatRecords(result?.data?.records);
};

export const create = async (table = null, record) => {
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
  const request = await axios
    .post(url, data, axiosConfig)
    .catch((error) => Log(error));

  // TODO: return id
  return request.data.id;
};
