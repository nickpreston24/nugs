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
    console.log("error", error);
  });

  let raw = formatRecords(result?.data?.records);
  console.log("raw", raw);

  return raw;
  // .then((result) => {
  //   let raw = formatRecords(result?.data?.records);
  //   console.log("raw", raw);
  // })
  // .catch((error) => {
  //   console.log("error", error);
  // });
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
      console.log("error", error);
    });
};

export const getById = async (id, table = null) => {
  Log(id);

  let record = await get(table, id).catch((error) => {
    console.log("error", error);
  });

  devmode && console.log("record :>> ", record);

  return record;
};

export const patch = (table = null, data = null) => {
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
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const create = (table = null, record) => {
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
    })
    .catch((error) => console.log(error));
};
