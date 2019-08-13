import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuItems: [
      {
        label: "Home",
        name: "home"
      },
      {
        label: "About",
        name: "about"
      }
    ]
  },
  getters: {
    menuItems: state => state.menuItems
  },
  mutations: {},
  actions: {}
});
