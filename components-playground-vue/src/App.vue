<template>
  <div id="app">
    <test-vowel-input v-model-custom-element="message" placeholder="edit me"></test-vowel-input>
    <p>Message is: {{ message }}</p>

    <test-button size="small" v-on:clicked="testButtonClicked">Button</test-button>
    <test-button v-on:clicked="testButtonClicked">Button</test-button>
    <test-button size="large" v-on:clicked="testButtonClicked">Button</test-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "App",
  data: () => ({
    message: '' as string
  }),
  methods: {
    testButtonClicked: function (event: any) {
      console.log(event);
    }
  }
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

  test-button {
    margin-right: 1rem;
  }
</style>
