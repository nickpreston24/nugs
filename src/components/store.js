import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            range: [300, 2000],

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
    getters: {
        completed() {
            userData.counter = Object.values(userData).filter((x) => emptyValues.has(x)).length;
            // const emptyValues = new Set (["", null, undefined])
            // console.log("this.completedSteps", this.completedSteps);
        },
    },
    mutations: {
        // increment(state) {
        //     state.count++
        // }
        setRange(newRange) {
            state.range = newRange;
        },
        addPart(state, payload) {
            console.log("part", payload);
        },
    },
});

export default store;
