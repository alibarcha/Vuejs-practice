<template>
  <div id="app">
    
        <student-app v-bind:message="msg" v-on:updateparentvariable="updatevaluefun($event)"></student-app>
         <p>parent message default : {{msg}}</p>
        <br><hr><hr><br>
         <!-- updata parent data -->
         <!-- <button v-on:click="updata">update data</button> -->

         <!-- second example of data from child -->

        <!-- child component -->

          <child-app v-bind:propmessage="msgtwo" v-on:updataparentmessage="updatemsg($event)"></child-app>
          <h3>Parent data : {{msgtwo}}</h3>


        
  </div>
</template>

<script>
import Students from './components/Students.vue'
import Child from './components/Child.vue'


export default {
  name: "App",
  components: {
    'student-app':Students,
    'child-app':Child
   
  },
  data() {
    return {
      msg:'This is a prop data message..',
      msgtwo:'this is second prop data message :)'
  
    };
  },
  methods:{

         updatevaluefun:function(updatevalue){

          this.msg=updatevalue
         },
    // updata:function(){
    //   this.msg="this is update tada through methods"
    // }

    // second data
    updatemsg:function(updateval){
      this.msgtwo=updateval
    }

  },
 


  computed: {},
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
  text-align: center;
}

input,
textarea {
  margin: 10px;
  width: 400px;
  padding: 10px;
}
</style>
