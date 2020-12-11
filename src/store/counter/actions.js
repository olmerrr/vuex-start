export default {
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
};