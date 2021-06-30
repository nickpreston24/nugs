import Airtable = require('airtable')

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

export const createRound = async (rounds: Round[]) => {

    const base = new Airtable({ apiKey: "keyl5Wo5ETa4HR4tt" }).base(
        "app33DDBeyXEGRflo"
    );
    console.log('hello from rounds :>>')
    base("Rounds").create(
        rounds,
        function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        }
    );
}

export const createOrder = async (orders: Order[]) => {
    const base = new Airtable({ apiKey: "keyl5Wo5ETa4HR4tt" }).base(
        "app33DDBeyXEGRflo"
    );

    base("Orders").create(
        orders,
        function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        }
    );
}
