<template>
    <div id="home">
        <h1>{{msg}}</h1>
        <div>{{text}}</div>
        <button v-on:click="incrementCounter">++</button>
        <p>{{counter}}</p>
        <div><button @click="toggle">Klicka här</button></div>
        <p id="text" v-show="isShown">Lorem ipsum dolor sit amet...</p>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Välkommen till Designeras demobutik byggd i Vue.js!',
      counter: 1,
      text: 'Här visas några exempel på funktionalitet i Vue.js',
      isShown: false,
    };
  },
  methods: {
    incrementCounter() {
      this.counter += 1;
    },
    toggle() {
      // Toggles control property
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style scoped>

</style>
