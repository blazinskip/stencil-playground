<template>
  <div id="app">
    <test-vowel-input v-model-custom-element="message" placeholder="edit me"></test-vowel-input>
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "App",
  data: () => ({
    message: '' as string
  })
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
