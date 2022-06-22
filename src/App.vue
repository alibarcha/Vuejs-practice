<template>
  <div id="app">
      <h1>wellcome</h1>
      {{message}}
      <p>{{message}}</p>
      <p>{{run('javascript')}}</p>
      <p>{{foo('dkjkjk')}}</p>
      <p>{{ok ? 'yes' : 'no'}}</p>
      <p>{{status ? 'condition true' : 'condition false'}}</p>
      <p>{{developer()}}</p>
      <p>Full Name of client {{fullName()}}</p>
      <h3>{{day('morning')}}</h3>
      <h3>{{day('evening')}}</h3>
      <h3>{{day('afternoone')}}</h3>
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
