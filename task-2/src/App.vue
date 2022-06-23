<template>
  <div id="app">
     <h2>second branch</h2>
   


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
