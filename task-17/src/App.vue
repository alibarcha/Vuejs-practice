<template>
  <div id="app">
    <header-app></header-app>
    <!-- <h2>root component</h2> -->
    <router-view></router-view>

  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    'header-app':Header,
    
  },
  data() {
    return {
 
  
    };
  },
  methods: {
   
  },
};
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

}

input,
textarea {
  margin: 10px;
  width: 400px;
  padding: 10px;
}


body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #222;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: white;    /* color of the scroll thumb */
  border-radius: 10px;       /* roundness of the scroll thumb */
  border: 3px solid orange;  /* creates padding around scroll thumb */
  margin: 0 10px;
  
}
</style>
