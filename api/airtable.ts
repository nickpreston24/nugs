import * as Airtable from 'airtable'

export type Order = {
    Cart: [],
    "Buy?": boolean,
    "Count Desired": 0,
}

export type Round = {
    Name: "",
    Grain: 0,
    "Muzzle Velocity": 0,
    "Found": "",
    "Caliber": "",
    "Manufacturer": "",
    "Diameter": 0.0
}

export type Build = {
    // Idea: is there a way to extract the fields and then match shape w/o types?
}

const base = new Airtable({ apiKey: "keyl5Wo5ETa4HR4tt" }).base(
    "app33DDBeyXEGRflo"
);

const create = async (baseName: string = null, items = []) => {

    const collection = items.map(i => {
        return {
            fields: {
                ...i
            }
        }
    }) as any

    // console.log(`collection`, collection)

    base(baseName).create(
        collection,
        (err, records) => {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach((record) => {
                console.log(record.getId());
            });
        }
    );
}

const destroy = async (baseName: string = null, ids = []) => {
    base(baseName).destroy(ids, (err, deletedRecords) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
    });
}

const update = async (baseName: string = null, items = []) => {
    base(baseName).update(items, (err, deletedRecords) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
    });
}

const get = async (baseName: string = null, id = null) => {
    if (!id) return;
    base(baseName).find(id, (err, record) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Retrieved ', record.id)
    })
}

export const createRounds = async (rounds: Round[]) => {
    create("Rounds", rounds)
}

export const createOrders = async (orders: Order[]) => {
    create("Orders", orders)
}

export const createBuilds = async (builds: Build[]) => {
    // console.log(`builds to create :>>`, builds)
    create("Builds", builds)
}