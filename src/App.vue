<template>
  <div id="app">
      <h2>Data Binding in vue js</h2>
      <p>html attribute binding, html content binding , form input binding ,html class binding</p>

      <p v-bind:title='title'>Attribute binding data</p>
      <p v-bind:title="title">binding data</p>
        <!-- text binding -->
      <p v-text="element"></p>
      <!-- inner html binding -->
      <div v-bind:class="cla" v-html="element"></div>

      <div v-bind:class="cla">Lorem ipsum dolor sit amet.</div>


        <a v-bind:href="ulink">{{name}} </a>
      <!-- <a v-bind:href="ulink">{{name}}</a> -->

      <div v-bind:class="box">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae qiat voluptatem.</p>
      </div>

      <div id="formBox">
          <form action="">
              <input type="text" v-bind:value="Name" placeholder="Enter Name">
              <input type="email" v-bind:value="email" placeholder="Enter Password">
              <button>Submit</button>
          </form>
           <div v-html="txt"></div>
      </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data (){
    return {
      title:'elementtitle',
      element:'<p>inner paragraph <a href="" >anchar tag</a> </p>',
      cla:'box',
      name:'vue course',
      ulink:'https://www.youtube.com/watch?v=BqCaoGuRDC4&list=PLT9miexWCpPUZ-xD9s70PhhP37blPSuax&index=4',
      box:'container',
      isActive:true,
      Name:'Ali Barcha',
      email:'abc@gmail.com',
      txt:'<p><a href="google.com">one</a></p>'
    }
  },
  methods:{
 
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
.container{
  border: 1px solid #222;
  background: #eee;
  width: 50%;
  margin: 10px auto;
}
.cont{
  color: red;
}
.box{
  color: red;
}
p[title="elementtitle"]{
  color: red;
  font-size: 20px;
  cursor: pointer;
}
p[title]:hover::after{
  content: "title";
  background: #eee;
  position: absolute;
  top: 26%;
  left: 50%;
  color: #222;
  padding: 10px 30px;
  border-radius: 5px;
}
#formBox{
  width: 50%;
  border: 1px solid #222;
  margin: 20px auto;
  height: 300px;
  padding: 20px;
  
}
form{
    display: flex;
   flex-direction: column; 
   justify-content: space-around;
   
}
form input{
  margin: 20px;
  padding: 15px;
}
form button{
  width: 80px;
  padding:10px;
  margin: auto;
  cursor: pointer;
}

</style>
