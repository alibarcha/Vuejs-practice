<template>
  <div id="app">
      <h1>wellcome</h1>
      {{message}}
      <p>{{message}}</p>
      <p>{{run('javascript')}}</p>
      <p>{{foo('dkjkjk')}}</p>
      <p>{{ok ? 'yes' : 'no'}}</p>
      <p>{{status ? 'condition true' : 'condition false'}}</p>
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
      status:true

    }
  },
  methods:{
    run:function(data){
      return 'wellcome to '+ data;
    },
    foo:function(key){
      return key;

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
