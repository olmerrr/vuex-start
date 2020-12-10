<template>
  <base-container title="Vuex1.1">
    <h2>{{ $store.state.counter }}</h2>
    <button>+</button>
    <button>-</button>

  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
};
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