import { ref, onMounted, toRefs, reactive, toRef } from "vue";
import { devmode } from "../helpers/generators";
import axios from "axios";

function concat(...args) {
    return args.reduce((acc, val) => [...acc, ...val]);
}

const apiKey = import.meta.env.VITE_VERCEL_AIRTABLE_API_KEY;
const baseKey = import.meta.env.VITE_VERCEL_BASE_KEY;

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
export default function useTable(tableName = "Parts", { maxRecords = 10 } = {}) {
    console.log("maxRecords", maxRecords);
    const state = ref({
        records: [], //the current state for whatever table you're on.
        table: tableName, // current table

        maxRecords,
    });
    const current = state.value;

    devmode && console.log("current", current);
    onMounted(() => {
        axios({
            url: `https://api.airtable.com/v0/${baseKey}/${tableName}?maxRecords=${maxRecords}`,
            headers: {
                "Content-Type": "x-www-form-urlencoded",
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((result) => {
            console.log("result", result);
            let raw = formatRecords(result?.data?.records);
            current.records = raw;

            devmode && console.log("current.records", current.records);
        });
    });

    const searchTable = async (options = { fields: [] }, tableName = "Parts") => {
        console.log("options :>> ", options);
        let url = `https://api.airtable.com/v0/${baseKey}/${tableName}?`;
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            if (i > 0) {
                url.concat(`&`);
            }
            url.concat(`fields%5B%5D=${field}`);
        }

        devmode && console.log("url", url);

        axios({
            url,
            headers: {
                "Content-Type": "x-www-form-urlencoded",
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((result) => {
            console.log("result", result);
            let raw = formatRecords(result?.data?.records);
            current.records = raw;

            console.log("current.records", current.records);
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
        // console.log('id :>> ', id);

        if (table) current.table = table;

        let record = await get(current.table, id);
        devmode && console.log("record :>> ", record);

        return record;
    };

    const patchRecord = (table = null, data = null) => {
        if (table) current.table = table;

        const url = `https://api.airtable.com/v0/${baseKey}/${table}`;
        const headers = {
            "Content-Type": "Content-Type: application/json",
            Authorization: `Bearer ${apiKey}`,
        };
        axios.patch(url, data, headers).then((result) => {
            console.log("result", result);
            let raw = formatRecords(result?.data?.records);
            current.records = raw;
            console.log("current.records", current.records);
        });
    };

    return { state: current, searchTable, getById, patchRecord };
}
