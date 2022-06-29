<template>
  <div id="app">
    <user-app></user-app>
  
  </div>                                                                                                  
</template>

<script>
import User from './components/User.vue'

export default {
  name: "App",
  components: {
    'user-app':User,
    
 
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
