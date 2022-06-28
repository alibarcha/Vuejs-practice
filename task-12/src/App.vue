<template>
  <div id="app">

   <!-- <employ-app></employ-app> --> 
   <!-- dynamic component handle -->

    <keep-alive>
         <components v-bind:is="component"> </components>
    </keep-alive>
 

    <br><br>

     <button v-on:click="component = 'student-app'">Student Data</button>
     <button v-on:click="component='employ-app'">Employ Data</button>

     <br><br><hr><hr><br><br>

     <data-app></data-app>

 
  </div>                                                                                                  
</template>

<script>

import Students from './components/Students.vue'
import Employ from './components/Employ.vue'

import Data from './components/Data.vue'


export default {
  name: "App",
  components: {
    'student-app':Students,
    'employ-app':Employ,
    'data-app':Data,

  
  },
  data() {
    return {
      component:"student-app"
   
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
