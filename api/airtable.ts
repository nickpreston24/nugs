import * as Airtable from 'airtable'
import { devmode } from './../src/helpers/generators';

const base = new Airtable({ apiKey: "keyl5Wo5ETa4HR4tt" }).base(
    "app33DDBeyXEGRflo"
);

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

export const findAll = async (baseName: string = null, limit = 10) => {

    const result = [];

    base(baseName).select({
        maxRecords: limit,
        view: "Grid view"
    }).eachPage((records, fetchNextPage) => {
        // This function (`page`) will get called for each page of records.
        records.forEach((record) => {
            console.log('Retrieved', record.get('Name'));
        });

        result.push(...records);
        console.log(`result`, result)

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });
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

// export type Order = {
//     Cart: [],
//     Buy: boolean,
//     "Count Desired": 0,
// }

// export interface IRound {
//     Name: "",
//     Grain: 0,
//     "Muzzle Velocity": 0,
//     "Found": "",
//     "Caliber": "",
//     "Manufacturer": "",
//     "Diameter": 0.0
// }

// export type RoundType = {
//     Name: "",
//     Grain: 0,
//     "Muzzle Velocity": 0,
//     "Found": "",
//     "Caliber": "",
//     "Manufacturer": "",
//     "Diameter": 0.0
// }

// export class Round implements IRound {
//     constructor(props) {
//         Object.assign(this, props)
//     }
//     Name: '';
//     Grain: 0;
//     "Muzzle Velocity": 0;
//     "Found": '';
//     "Caliber": '';
//     "Manufacturer": '';
//     "Diameter": 0;
// }

// export type Build = {
//     // Idea: is there a way to extract the fields and then match shape w/o types?
// }