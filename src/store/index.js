import {createStore} from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters';
import counterModule from './counter/index.js';


const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  // после добавления mutations: я могу использовать метод .comit('название method')
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
export default store;