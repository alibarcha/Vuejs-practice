<template>
  <div id="app">
    
      <!-- components props data pass -->
      <header-app name="william son"></header-app>
      <content-area traner="The Net Ninja"></content-area>
      <footer-app v-bind:title="foo"></footer-app>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: {
    'header-app':Header,
    'content-area':Content,
    'footer-app':Footer,
  },
  data() {
    return {
      foo:'! 2022 good :)'
    };
  },

  methods: {},
  computed: {},
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

input,
textarea {
  margin: 10px;
  width: 400px;
  padding: 10px;
}
</style>
