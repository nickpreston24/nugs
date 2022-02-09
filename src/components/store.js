import { createStore } from "vuex";
import { devmode } from "../helpers/generators";

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
            settings: {
                // https://gbksoft.com/blog/dimensions-resolution-for-ios-and-android-app-design/
                screen:
                {
                    device: '', // e.g. Apple iPhone 11 Pro
                    dimensions: [480, 320]
                },

                developer: {
                    borders: {
                        enabled: false,
                    },
                    fakemode: {
                        enabled: false
                    },
                    prodmode: {
                        enabled: false
                    }
                }
            },

        };
    },
    getters: {
        getChecklist() {
            // TODO: determine whether this is worth it or we can just directly change the state.  Look at timemachine vuex.
        },
    },
    mutations: {
        setRange(state, newRange) {
            state.range = newRange;
        },
        addPart(state, payload) {
            console.log("payload", payload);
        },
        toggle(state, payload) {
            const name = payload.name;
            const setting = state.settings.developer[name];
            if (!setting) {
                console.error(`Could not find setting '${name}'`)
            }
            setting.enabled = !setting.enabled;
        }
    },
    actions: {
        toggleSetting({ commit }, payload) {
            commit('toggle', payload)
        }
    }
});

export default store;
