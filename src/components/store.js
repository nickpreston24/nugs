import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            range: [],

            checklist: {
                buffer: {
                    spring: null,
                    tube: null,
                    alt: null,
                },
                upper: {
                    handguard: null,
                    barrel: null,
                    bcg: null,
                    gasblock: null,
                    gastube: null,
                },
                buttstock: { id: null, brand: "" },
                lower: {
                    LPK: {
                        brand: "",
                    },
                },
            },
        };
    },
    mutations: {
        // increment(state) {
        //     state.count++
        // }
        setRange(newRange) {
            state.range = newRange;
        }
    },
});

export default store;
