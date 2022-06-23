<template>
  <div id="app">
    <label for="fname">First Name</label>
    <input
      id="fname"
      v-model="firstName"
      type="text"
      placeholder="Enter First Name"
    /><br />
    <label for="lname">Last Name</label>
    <input
      id="lname"
      v-model="lastName"
      type="text"
      placeholder="Enter Last  Name"
    />
    <br />
    <h4>Full Name :</h4>
    <input type="text" v-model="fullName" />
    <p>{{ channel }}</p>

    <br><hr><hr><br><br>
    <input type="text" placeholder="Enter Name" ref="txtname"><br>
    <input type="email" placeholder="Enter Email" ref="txtemail"><br>
    <button @click="btnSubmit">Submit</button>
<br><br>
    <textarea id="textarea" ref="textarea" placeholder="Write Your Message" ></textarea><br>
    <button @click="msg">click</button>



  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      channel: "online chanell",
     
    };
  },

  methods: {
    btnSubmit:function(){
      console.log(this.$refs)
      console.log("Name :" + this.$refs.txtname.value)
      console.log("Email :" + this.$refs.txtemail.value)

    },
    msg:function(){
      console.log(this.$refs)
      console.log(this.$refs.textarea.value)
      console.log(this.$refs.textarea.innerText)
    }
  },
  computed: {
    fullName: {
      get: function () {
        // geter function
        var fullName = this.firstName + " " + this.lastName;
        // return this.firstName+this.lastName
        return fullName;
      },
      set: function () {
        this.channel = "Update Channel ! : )";
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

input,textarea {
  margin: 10px;
  width: 400px;
  padding: 10px;
}
input::placeholder{
  /* background: lightgreen; */
  text-transform: uppercase;
  /* padding-left: 30px; */
  /* text-align: center; */
  color: #222;
  font-size: 10px;
  /* transform: translateX(-30px); */
}
input:focus::placeholder{
 color: orangered;
  /* transform: translateY(-90px); */
  transform: translateY(20px);
  z-index: 999;
}
</style>
