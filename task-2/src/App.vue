<template>
  <div id="app">
     <h2>two way data binding</h2>
     <!-- <input type="text" v-model.lazy="data"> -->
     <!-- <input type="text" v-model.trim="data"> -->

     <form >
        <input type="text" placeholder="Enter Name" v-model.lazy="name" > <br>
        <input type="email" placeholder="Enter Email" v-model="email" ><br>
        <input type="password" placeholder="Password" v-model="password" > <br>
        <!-- <button  @click="submitForm" type="button">Sign Up</button> -->
        <input type="submit" value="submit">
     </form>
     <p>{{name}}</p>
     <p>{{email}}</p>
     <p>{{password}}</p>

     <br><br>
     <input type="text" v-model.lazy="fname" placeholder="Enter first name">
     <input type="text" v-model.lazy="lname" placeholder="Enter last name">

     <p>User Name: {{fullname}}</p>
     <br><hr>

        <p>Convert meter to centimeter</p>
     <input type="number" v-model="number" placeholder="Enter meter number">
     <h3>Centimeter : {{convertCentimeter}}</h3>

     <p>Marks of Student</p>
     <input type="number" v-model="cNum" placeholder="Enter Computer Marks"><br>
     <input type="number" v-model="eNum" placeholder="Enter English Marks"><br>
     <input type="number" v-model="sNum" placeholder="Enter Science Marks"><br>
     <h3>Total Marks Of Student : {{totalMarks}}</h3>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data (){
    return {
      name:'',
      email:'',
      password:'',
      fname:'',
      lname:'',
      number:'',
      cNum:null,
      eNum:null,
      sNum:null,
    }
 
  },
  methods:{
   
  },
  computed:{
    fullname:function(){
      return this.fname +" "+ this.lname
    },
    convertCentimeter:function(){
      return this.number*100;

    },
    totalMarks:function(){
      // var tot= this.cNum+this.eNum+this.sNum
      //  return tot
       return parseInt(this.cNum) + parseInt(this.eNum) + parseInt(this.sNum)

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
