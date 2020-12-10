<template>
  <base-container title="Vuex1.1">
    <the-counter></the-counter>
    <button @click="addOne">+</button>
    <button @click="delOne">-</button>

  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
  },
  methods: {
      addOne() {
        this.$store.state.counter++;
      },
      delOne() {
        this.$store.state.counter--;
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>