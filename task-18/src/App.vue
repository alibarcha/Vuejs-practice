<template>
  <div id="app">
       <api-app></api-app>
       <br><hr><hr><br>
       <post-app></post-app>
       <br><hr><hr><br>
       <deleat-app></deleat-app>

  </div>
</template>

<script>
import FetchApi from './components/FetchApi.vue'
import PostData from './components/postData.vue'
import Deleat from './components/Deleat.vue'
export default {
  name: "App",
  components: {
    'api-app':FetchApi,
    'post-app':PostData,
    'deleat-app':Deleat
    
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

</style>
