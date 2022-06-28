<template>
  <div id="app">

        <employ-app></employ-app>
        <manager-app></manager-app>
 

  </div>
</template>

<script>

import Employ from './components/Employ.vue'
import Manager from './components/Manager.vue'


export default {
  name: "App",
  components: {
    'employ-app':Employ,
    'manager-app':Manager
    
   
  },
  data() {
    return {
   
  
    };
  },
  methods:{


    }

  }
 



</script>

<style>
* {
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
