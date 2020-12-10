<template>
  <button @click="addOne">+</button>
  <button @click="delOne">-</button>
  <button @click="increase">Increase</button>

</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment');
  },
    delOne() {
      this.$store.commit('decrement');
  
  },
   increase() {
      // this.$store.commit('increase', { value: 10 });
      setTimeout(() =>   this.$store.dispatch({
        type: 'increase',
        value: 10
      })
  ,2000)
  },
  },
}
</script>