import { createStore } from "vuex";
export default createStore({
    state: {
        tota: localStorage.getItem("tota") ? localStorage.getItem("tota") : null,
    },
    mutations: {
        setToTa(state, payload) {
            state.tota = payload;
            localStorage.setItem("tota", payload);
        },
        clearToTa() {
            localStorage.removeItem("tota");
        },
    },
    actions: {
        SETTOTA(context, payload) {
            context.commit("setToTa", payload);
        },
        CLEARTOTA(context) {
            context.commit("clearToTa");
        },
    },
    modules: {},
});