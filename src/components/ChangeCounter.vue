<template>
  <button @click="inc">+</button>
  <button @click="dec">-</button>
  <button @click="incre({value: 10})">Increase</button>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
  //   addOne() {
  //     this.$store.commit('increment');
  // },
  //   delOne() {
  //     this.$store.commit('decrement');
  // },
  //  increase() {
  //     // this.$store.commit('increase', { value: 10 });
  //     setTimeout(() =>   this.$store.dispatch({
  //       type: 'increase',
  //       value: 10
  //     })
  // ,2000)
  // },
  // ...mapActions([
  //   'increment',
  //   'decrement',
  //   'increase'
  //   ])
  ...mapActions({
    inc: 'increment',
    dec:'decrement',
    incre: 'increase'
  })
  },
}
</script>