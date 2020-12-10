import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';
const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  // после добавления mutations: я могу использовать метод .comit('название method')
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
});

const app = createApp(App);

app.use(store);
app.mount('#app');
