import * as Airtable from "airtable";
import { devmode } from "../src/helpers/generators";
import dotenv from "dotenv";

// export const base = new Airtable({
//   apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
// }).base(process.env.VUE_APP_BASE_KEY);

export const formatRecords = (records: any | [] = []) => {
  // console.log('records (format) :>> ', records);
  let collection = [].concat(records);
  devmode && console.log("collection", collection);

  const format = (record) => {
    // console.log('record (format) :>> ', record);
    if (!record) return {};
    let { id, fields } = record;
    return {
      id,
      ...fields,
    };
  };
  // console.log('collection :>> ', collection);
  let result =
    collection.length > 0 ? collection.map(format) : format(collection);

  // console.log('result (collection) :>> ', result);
  return result;
};

export const initialOptions = {
  sort: [{ field: "Name", direction: "asc" }],
  pageSize: 10,
  maxRecords: 20,
  // filterByFormula: "",
  /*other stuff*/
};

export function pagify(table, options = null) {
  // console.log('table>>', table)

  if (!table) throw Error("Can't load an empty table name!");

  // devmode && console.log(options)
  const cursor = {
    reject: null,
    resolve: null,
    nextPage: null,
  };

  // const doneCallback = (error) => {
  //   if (error) {
  //     cursor.reject(error);
  //   } else {
  //     cursor.resolve();
  //   }
  // };

  // const eachPageCallback = (records, fetchNextPage) => {
  //   cursor.nextPage = () => {
  //     return new Promise((res, rej) => {
  //       cursor.reject = rej;
  //       cursor.resolve = res;
  //       fetchNextPage();
  //     });
  //   };
  //   cursor.resolve(records);
  // };

  // cursor.nextPage = () => {
  //   return new Promise((res, rej) => {
  //     cursor.reject = rej;
  //     cursor.resolve = res;
  //     base(table).select(options).eachPage(eachPageCallback, doneCallback);
  //   });
  // };

  return cursor;
}

export const create = async (table: string = null, items = []) => {
  // Reshape the airtable data passed to the UI:
  const collection = items.map((i) => {
    return {
      fields: {
        ...i,
      },
    };
  }) as any;

  // devmode && console.log(`collection`, collection)

  // base(table).create(collection, (err, records) => {
  //   if (err) {
  //     console.error("ERROR: ", err);
  //     return;
  //   }
  //   records.forEach((record) => {
  //     console.log(record.getId());
  //   });
  // });
};

export const destroy = async (table: string = null, ids = []) => {
  // base(table).destroy(ids, (err, deletedRecords) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log("Deleted", deletedRecords.length, "records");
  // });
};

export const update = async (table: string = null, items = []) => {
  // base(table).update(items, (err, deletedRecords) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log("Deleted", deletedRecords.length, "records");
  // });
};

export const findAll = (table: string = null, limit = 10) => {
  let result = [];

  // base(table)
  //   .select({
  //     maxRecords: limit,
  //     view: "Grid view",
  //   })
  //   .eachPage(
  //     (records, fetchNextPage) => {
  //       for (let index = 0; index < records.length; index++) {
  //         const element = records[index];
  //         result.push(element);
  //         console.log(`element:>> ${index}`, element);
  //       }

  //       // To fetch the next page of records, call `fetchNextPage`.
  //       // If there are more records, `page` will get called again.
  //       // If there are no more records, `done` will get called.
  //       fetchNextPage();
  //       // console.log(`result 2`, result)
  //     },
  //     function done(err) {
  //       if (err) {
  //         console.error(err);
  //         return;
  //       }
  //     }
  //   );
  console.log(`result (findall)`, result);

  // devmode && console.log(`Returning result ... `, result[0])
  return formatRecords(result);
};

export const get = async (table: string = null, id = null) => {
  if (!id) return null;

  return new Promise((resolve, reject) => {
    // base(table).find(id, (error, record) => {
    //   // devmode && console.log('Retrieved ', record)
    //   if (error) {
    //     reject(error);
    //   } else {
    //     resolve(formatRecords(record));
    //   }
    // });
  });
};
