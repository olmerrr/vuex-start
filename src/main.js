import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state){
      state.counter = state.counter + 1;
    },
    decrement(state){
      state.counter = state.counter - 1;
    },
    increase(state, payload){
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() =>{
        context.commit('increment');
      }, 2000)
    },
    decrement(context) {
      setTimeout(() =>{
        context.commit('decrement');
      }, 1000)
    },
    increase(context,payload){
      // console.log(context);
      context.commit('increase', payload);
    },
 },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizeCounter(_, getters) {
      const finalCounter =  getters.finalCounter;
      if (finalCounter < 0){
        return 0;
      } 
      if (finalCounter > 100){
        return 100;
      }
        return finalCounter;
    },
  },
};
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
  mutations: {
    setAuth(state, payload) {
      console.log(payload);
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
 
  },
  getters: {
    userIsAutenticate(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount('#app');
