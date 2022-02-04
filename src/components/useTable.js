import { ref, onMounted, toRefs, reactive, toRef } from "vue";
import { findAll, formatRecords, get, pagify } from "../../data/airtable-curl";
import { devmode } from "../helpers/generators";
import axios from "axios";

function concat(...args) {
    return args.reduce((acc, val) => [...acc, ...val]);
}

const apiKey = import.meta.env.VITE_VERCEL_AIRTABLE_API_KEY;
const baseId = import.meta.env.VITE_VERCEL_BASE_KEY;
// console.log('apiKey', apiKey);

const token = "";

/** A reactive generic repository */
export default function useTable(tableName = "Parts") {
    const state = reactive({
        records: [],
        table: tableName,
    });

    onMounted(() => {
        axios({
            url: `https://api.airtable.com/v0/${baseId}/${tableName}?maxRecords=10`,
            headers: {
                "Content-Type": "x-www-form-urlencoded",
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((result) => {
            console.log("result", result);
            let raw = formatRecords(result?.data?.records);
            state.records = raw;

            console.log("state.records", state.records);
        });
    });

    const searchTable = async (options = { fields: [] }, tableName = "Parts") => {
        console.log('options :>> ', options);
        let url = `https://api.airtable.com/v0/${baseId}/${tableName}?`;
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            if (i > 0) {
                url.concat(`&`);
            }
            url.concat(`fields%5B%5D=${field}`);
        }
        console.log('url', url);


        axios({
            url,
            headers: {
                "Content-Type": "x-www-form-urlencoded",
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((result) => {
            console.log("result", result);
            let raw = formatRecords(result?.data?.records);
            state.records = raw;

            console.log("state.records", state.records);
        });

        // if (tableName)
        //     state.table = tableName;
        // const atPageCursor = pagify(state.table, options);
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
        //     state.records = allPages
        //     console.log('AFTER :>> ', state)
        // } catch (err) {
        //     // Errors thrown from the nextPage call would be caught here.
        //     alert(err);
        // }
    };

    const getById = async (id, table = null) => {
        // console.log('id :>> ', id);

        if (table) state.table = table;

        let record = await get(state.table, id);
        devmode && console.log("record :>> ", record);

        return record;
    };

    return { state, searchTable, getById };
}
