<template>
  <div id="app">
    
      <student-app>
        <h2 slot="head">Form Heading slot</h2>
          <div slot="form-header">
            <h3>student form</h3>
          </div>
          <div slot="form-element">
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Email">
            <input type="password" placeholder="Password">
          </div>
          <div slot="form-button">
            <button v-button.mediambtn>Login</button>
          </div>
          <div slot="form-footer">
            <h3>Form footer</h3>
          </div>
        
      </student-app>
    
  </div>                                                                                                  
</template>

<script>

import Students from './components/Students.vue'



export default {
  name: "App",
  components: {
    'student-app':Students,

  
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
