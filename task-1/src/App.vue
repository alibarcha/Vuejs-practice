<template>
  <div id="app">
      <h2>Events in vue</h2>
        <p>{{count}}</p>
      <button v-on:click="add">Add</button>
      <button @click="sub">Sub</button>

      <br><br><br>
      <button v-on:click="greet">Greet</button>
      <p>{{sayhi('good by dear')}}</p>
        <br><br>
        <!-- once -->
      <button @click.once="alert">.once modifier</button><br><br>
      <button @click.stop="alert">.stop modifier</button><br><br>
      <button @click.prevent="alert">.prevent modifier</button><br><br>
      <button @click.capture="alert">.captutre modifier</button><br><br>
      <button @click.passive="alert">.passive modifier</button><br><br>


      <button @keyup.enter="alert">keypress enter</button><br><br>
      <button @keyup.delete="alert">keypress deleat</button><br><br>
      <button @keyup.exact="alert">keypress exact</button><br><br>

      <button @click.prevent="signup">Sign UP</button><br><br>

      <p>User Name :{{userName}}</p>

      <div id="mybox" @mousemove="mouseFun">
          mousemove event <br><br>
          <span>{{x}} , {{y}}</span>
      </div>
      <br>

      <button @mouseover="mouseover" @mouseout="mouseout">mouse up</button>
      <br>
      <input v-on:keypress="keypress" type="text" placeholder="Enter Your Name">
    <p>{{alpha}}</p>

    <div @click="con">
        <p @click.stop="con">Lorem ipsum dolor sit amet.</p>
    </div>

    <div @click.capture="parent">
      <button @click="child">
        child event
      </button>
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
      count:0,
      name:'vue js',
      userName:'',
      x:0,
      y:0,
      alpha:''
 
   
    }
  },
  methods:{
    add:function(){
      this.count++
    },
    sub:function(){
      this.count--
    },
    greet:function(event){
      alert(`Hello ${this.name}`)
      if(event){
        alert(event.target.tagName)
      }
    
    },

    sayhi(hello){
     return hello
    },
    alert:function(){
      alert('alert called')
    },

    signup:function(){
     let num= prompt("Enter Your Name")
     this.userName=num
    },
      mouseFun:function(event){
        // console.log(event)
        this.x=event.offsetX
        this.y=event.offsetY
       
      },
      mouseover:function(){
        alert("mouse over event called")
        document.body.style.background="#eee"
      },
      mouseout:function(){
        document.body.style="background:#222  "
      },

      keypress:function(event){
          console.log(event.key)
        // confirm("Enter Your Full Name :)")
        this.alpha=event.key
       
      },
      con:function(){
        console.log("event fired")
      },
      parent:function(){
        console.log("parent event ")
      },

      child:function(){
        console.log("child event")
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
#mybox{
  width: 400px;
  height: 200px;
  border: 1px solid lightgreen;
  margin: auto;
}
input{
  margin: 10px;
  width: 400px;
  padding: 10px;
}

</style>
