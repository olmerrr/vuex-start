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
    
  },
});

const app = createApp(App);

app.use(store);
app.mount('#app');
