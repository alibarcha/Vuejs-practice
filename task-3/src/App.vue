<template>
  <div id="app">
    <h2>Dynamic css classes concept</h2>
    <!-- <button v-bind:style="{color:'red',padding:'10px',border:'2px solid green'}">click me</button> -->
    <!-- <br>
    <button v-bind:class="{red:true,green:true}">Toggle</button>
    <p v-bind:class="{para:false,para2:true}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soeleniti?</p>
    <p v-bind:class="{container:true}">para</p> -->

    <button @mouseover="change" v-bind:class="{btngreen:isActive,btnred:Active}">Toggle Button</button>
    
    <p v-bind:class="['first','second','thired']">Lorem ipsum dolor sit amet.</p>

  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      // red:'redclass',
      // para:'para',
      // para2:'para2'
      isActive:true,
      Active:false

  
    };
  },
  

  methods: {
    change:function(){
      this.isActive=!this.isActive
      this.Active=!this.Active
    }
  },
  computed: {
   
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  margin: 10px;
  width: 400px;
  padding: 10px;
}
/* .redclass{
  color: red;
}
.red{
  color: orangered;
} */

.btngreen{
  padding: 10px;
  color: #222;
  font-weight: bold;
  background: lightgreen;
  border: none;
  cursor: pointer;
}
.btnred{
   padding: 10px;
  color: #222;
  font-weight: bold;
  background: orangered;
  border: none;
  cursor: pointer;
}
.first{
  color: red;
}
.second{
  background: lightcyan;
}
.thired{
  font-size: 20px;
}

</style>
