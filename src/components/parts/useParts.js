import { ref, onMounted, toRefs, reactive, toRef } from 'vue'
import { base } from "../../../api/airtable";

export default function useParts() {
    // const parts = reactive([])
    // const searchParameters = ref([])
    const state = reactive({
        parts: []
    })

    // const stateRef = toRefs(state)

    //   const fooRef = toRef(state, 'foo')

    //   fooRef.value++
    //   console.log(state.foo) // 2
    onMounted(() => {
        base("Parts")
            .select({
                maxRecords: 20,
                view: "Grid view",
            })
            .eachPage(
                (records, fetchNextPage) => {
                    let raw = records.map((r) => {
                        const { id, fields } = r;
                        return {
                            id,
                            ...fields,
                        };
                    });
                    // console.log(`raw`, raw);
                    state.parts = raw;
                    // console.log('state', state)



                    // this.parts = parts;
                    // parts = raw;
                    // parts.value = raw;
                    // parts.push(...raw)
                    // console.log('parts ref/', this.parts)
                    // this.parts = useState(parts);
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

    // const searchParts = (id) => {
    //     return parts.filter(() => {
    //         // some search code
    //     })
    // }
    // return {
    //     stuff: toRefs(state)
    // }
    // return toRefs(state)
    return { state }
}