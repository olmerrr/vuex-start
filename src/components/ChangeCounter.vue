<template>
  <button @click="addOne">+</button>
  <button @click="delOne">-</button>

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
  },
}
</script>