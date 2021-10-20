import { ref, onMounted, toRefs, reactive, toRef } from 'vue'
import { base, findAll, formatRecords } from "../../../api/airtable";

export default function useParts() {

    const state = reactive({
        parts: [],
    })

    onMounted(() => {
        base("Parts")
            .select({
                maxRecords: 100,
                view: "Grid view",
            })
            .eachPage(
                (records, fetchNextPage) => {
                    let raw = formatRecords(records);
                    console.log('records:>>', records)
                    state.parts = raw;

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

    const searchParts = (limit = 5) => {
        let results = findAll("Parts", limit);
        console.log(results);

        state.parts = results;

        console.log('state', state)
    }

    // const searchParts = (id) => {
    //     return parts.filter(() => {
    //         // some search code
    //     })
    // }
    // return {
    //     stuff: toRefs(state)
    // }
    // return toRefs(state)
    return { state, searchParts }
}