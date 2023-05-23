import { createStore } from "vuex";

const store = createStore({
  state: {
    selectedOption: 0,
  },
  getters: {},
  mutations: {
    // mutations pour modifier l'état

    setselectedOption(state, value) {
      state.selectedOption = value;
    },
  },
  actions: {},
  modules: {},
});

export default store;
