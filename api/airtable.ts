import * as Airtable from 'airtable'
import { devmode } from './../src/helpers/generators';
import dotenv from 'dotenv'

export const base = new Airtable({ apiKey: process.env.VUE_APP_AIRTABLE_API_KEY }).base(
    process.env.VUE_APP_BASE_KEY
);

export const formatRecords = (records = []) => {
    return records.map((r) => {
        const { id, fields } = r;
        return {
            id,
            ...fields,
        };
    });
}

export const initialOptions = {
    sort: [{ field: "Name", direction: "asc" }],
    pageSize: 10,
    maxRecords: 20,
    // filterByFormula: "",
    /*other stuff*/
};

export function pagify(table, options = null) {
    console.log('table>>', table)
    
    if (!table)
        throw Error("Can't load an empty table name!")
    if (!options)
        options = initialOptions;

    console.log(options)
    const cursor = {
        reject: null
        , resolve: null
        , nextPage: null
    };

    const doneCallback = error => {
        if (error) {
            cursor.reject(error);
        } else {
            cursor.resolve();
        }
    };

    const eachPageCallback = (records, fetchNextPage) => {
        cursor.nextPage = () => {
            return new Promise((res, rej) => {
                cursor.reject = rej;
                cursor.resolve = res;
                fetchNextPage();
            });
        };
        cursor.resolve(records);
    };

    cursor.nextPage = () => {
        return new Promise((res, rej) => {
            cursor.reject = rej;
            cursor.resolve = res;
            base(table)
                .select(options)
                .eachPage(eachPageCallback, doneCallback);
        });
    };

    return cursor;
}



export const create = async (baseName: string = null, items = []) => {

    // Reshape the airtable data passed to the UI:
    const collection = items.map(i => {
        return {
            fields: {
                ...i
            }
        }
    }) as any

    devmode && console.log(`collection`, collection)

    base(baseName).create(
        collection,
        (err, records) => {
            if (err) {
                console.error('ERROR: ', err);
                return;
            }
            records.forEach((record) => {
                console.log(record.getId());
            });
        }
    );
}

export const destroy = async (baseName: string = null, ids = []) => {
    base(baseName).destroy(ids, (err, deletedRecords) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
    });
}

export const update = async (baseName: string = null, items = []) => {
    base(baseName).update(items, (err, deletedRecords) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
    });
}

export const findAll = (baseName: string = null, limit = 10) => {

    let result = [];

    base(baseName).select({
        maxRecords: limit,
        view: "Grid view"
    }).eachPage((records, fetchNextPage) => {

        for (let index = 0; index < records.length; index++) {
            const element = records[index];
            result.push(element)
            console.log(`element:>> ${index}`, element)
        }

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
        // console.log(`result 2`, result)

    }, function done(err) {
        if (err) { console.error(err); return; }

    });
    console.log(`ret`, result)

    // devmode && console.log(`Returning result ... `, result[0])
    return formatRecords(result)

}

export const get = async (baseName: string = null, id = null) => {
    if (!id) return;
    base(baseName).find(id, (err, record) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Retrieved ', record.id)
    })
}
