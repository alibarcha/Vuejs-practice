<template>
  <div id="app">
    
      <!-- components props data pass -->
      <!-- <header-app name="william son"></header-app>
      <content-area traner="The Net Ninja" v-bind:para="title" v-bind:Allcourses="courses"></content-area>
      <footer-app v-bind:title="foo"></footer-app> -->


      <!-- props components -->

      <prop-1></prop-1>
      <!-- <prop-2></prop-2> -->

  </div>
</template>

<script>
// import Header from './components/Header.vue'
// import Content from './components/Content.vue'
// import Footer from './components/Footer.vue'

import Prop1 from './components/Prop1.vue'
import Prop2 from './components/Prop2.vue'

export default {
  name: "App",
  components: {
    // 'header-app':Header,
    // 'content-area':Content,
    // 'footer-app':Footer,

    'prop-1':Prop1,
    'prop-2':Prop2,
  },
  data() {
    return {
      // foo:'! 2022 good :)',
      // title:'props is used for to transfer data parent component to child ',

      //    courses:[
      //           {name:'wordpress  development',url:'https://v2.vuejs.org/'},
      //           {name:'web development',url:'https://v2.vuejs.org/'},
      //           {name:'vue js  development',url:'https://v2.vuejs.org/'},
      //           {name:'React development',url:'https://v2.vuejs.org/'},
      //           {name:'Make Api development',url:'https://v2.vuejs.org/'},
      //       ]

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
  text-align: center;
}

input,
textarea {
  margin: 10px;
  width: 400px;
  padding: 10px;
}
</style>
