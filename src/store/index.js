import { createStore } from "vuex";

const store = createStore({
  state: {
   
    currentComponent: "Home",
  },
  getters: {},
  mutations: {
    // mutations pour modifier l'état
   
    setCurrentComponent(state, value) {
      state.currentComponent = value;
    },
  },
  actions: {},
  modules: {},
});

export default store;
