import Airtable = require('airtable')

type Order = {
    Cart: [],
    "Buy?": boolean,
    "Count Desired": 0,
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
