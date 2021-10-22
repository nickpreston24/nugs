import { ref, onMounted, toRefs, reactive, toRef } from 'vue'
import { base, findAll, formatRecords, pagify } from "../../api/airtable";


function concat(...args) {
    return args.reduce((acc, val) => [...acc, ...val]);
}

/** A reactive generic repository */
export default function useTable(tableName = "Parts") {

    const state = reactive({
        records: [],
        table: tableName
    })

    onMounted(() => {
        base(state.table)
            .select({
                maxRecords: 10,
                view: "Grid view",
            })
            .eachPage(
                (records, fetchNextPage) => {
                    let raw = formatRecords(records);
                    console.log('first records:>>', records)
                    state.records = raw;

                    // To fetch the next page of records, call `fetchNextPage`.
                    // If there are more records, `page` will get called again.
                    // If there are no more records, `done` will get called.
                    fetchNextPage();
                },
                function done(err) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                }
            );
    })

    const searchPagified = async (options = null) => {

        console.log('options :>> ', options);

        const atPageCursor = pagify(state.table, options);

        try {
            // nextPage return a promise that resolves to an array of Record objects.
            let atResultsPage = await atPageCursor.nextPage();

            let pages = [];

            while (atResultsPage && atResultsPage.length) {
                // Process this page.
                const records = atResultsPage
                pages.push(formatRecords(records))

                // Get next set
                atResultsPage = await atPageCursor.nextPage();
            }

            let allPages = pages.reduce((a, b) => concat(a, b))
            console.log("All Pages :>> ", allPages)
            console.log('BEFORE: ', state)
            state.records = allPages
            console.log('AFTER :>> ', state)

        } catch (err) {
            // Errors thrown from the nextPage call would be caught here.
            alert(err);
        }
    }

    return { state, searchPagified }
}