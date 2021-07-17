import { createStore } from "vuex";

export default createStore({
  state: {
    schoolName: "University Highschool",
    schoolMainLink: "university.edu.ph",
    menuIsOpen: false,
  },
  mutations: {
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
    closeMenu(state) {
      state.menuIsOpen = false;
    },
  },
  actions: {},
  modules: {},
});
