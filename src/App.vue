<template>
  <div id="app">
      <h1>wellcome</h1>
      {{message}}
        <h2>branch 1</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  },
  data (){
    return {
      message:'vue js',
      ok:false,
      status:true,
      name:'jon william son',
      field:'frontend developer',
      firstName:'steve',
      lastName:'smith'

    }
  },
  methods:{
    run:function(data){
      return 'wellcome to '+ data;
    },
    foo:function(key){
      return key;

    },
    developer:function(){
      return this.name + this.field;
    },
    fullName:function(){
      return this.firstName + this.lastName;
    },
    day(val){
      return 'good ' + val;
    }
  }

}
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
</style>
