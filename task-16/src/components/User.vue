<template>
  <div id="user">
    <h2>User Sign Up Area</h2>

    <form action="">
      <label for=""
        >Name<input
          v-model="userData.name"
          type="text"
          placeholder="Enter Name" /></label
      ><br />
      <label for=""
        >Email<input
          v-model="userData.email"
          type="email"
          placeholder="Enter Email"
      /></label>
      <br />
      <label for=""
        >Age<input v-model="userData.age" type="number" placeholder="Enter Age"
      /></label>
      <br />
      <label for=""
        >Password<input
          v-model="userData.password"
          type="password"
          placeholder="Enter Password"
      /></label>
      <br />

      <h4>Experties</h4>
      <br />
      <div id="experties">
        <div>
          <label for="frontend">frontend</label>
          <input
            type="checkbox"
            value="frontend"
            id="frontend"
            v-model="userData.experties"
          />
        </div>
        <div>
          <label for="backend">backend</label>
          <input
            type="checkbox"
            value="backend"
            id="backend"
            v-model="userData.experties"
          />
        </div>
        <div>
          <label for="fullstack">fullstack</label>
          <input
            type="checkbox"
            value="fullstack"
            id="fullstack"
            v-model="userData.experties"
          />
        </div>
        <div>
          <label for="wordpress">wordpress</label>
          <input
            type="checkbox"
            value="wordpress"
            id="wordpress"
            v-model="userData.experties"
          />
        </div>
      </div>

      <!-- radio binding -->
      <h4>Select Gender</h4>
      <div id="gender">
      <label for="male">Male </label>
          <input type="radio" value="male" id="male" name="gender" v-model="userData.gender">
      <label for="female">Female </label>
          <input type="radio" value="female" id="female" name="gender" v-model="userData.gender">
      </div>

      <!-- select binding -->
      <h4>Select Country</h4><br>
      <select v-model="userData.country">
            <option v-for="item in countrys" v-bind:key="item.id">{{item}}</option>
      </select>
      
    </form>

    <div id="previewData">
      <h2>Preview Data</h2>
      <h4>Name : {{ userData.name }}</h4>
      <h4>Email : {{ userData.email }}</h4>
      <h4>Age : {{ userData.age }}</h4>
      <h4>Password : {{ userData.password }}</h4>
      <h4>Experties :</h4>
      <ul>
        <li v-for="item in userData.experties" v-bind:key="item.id">
          {{ item }}
        </li>
      </ul>

      <h4>Gender :</h4>
        <p>{{userData.gender}}</p>

        <h4>Country : </h4>
        <p>{{userData.country}}</p>
     
      
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      userData: {
        name: "",
        email: "",
        age: "",
        password: "",
        experties: [],
        gender:'',
        country:''
      },
      countrys:['pakistan','india','iran','china']
    };
  },
  methods:{
    gender:function(){

    }
  }
};
</script>

<style scoped>
#user {
  width: 80%;
  border: 1px solid;
  margin: 20px auto;
  padding: 30px;
  background: #eee;
}
#experties {
  width: 60%;
  margin: 10px auto;
  border: 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
input[type="checkbox"],
lable {
  /* display: inline; */
  width: 20px;
}
#previewData {
  text-align: left;
  margin: 30px 50px;
  padding: 20px;
}
#previewData h4 {
  padding: 10px;
}
#gender{
    width: 50%;
    margin: 15px auto;
}
#gender  input{
    width: 30px;
}
</style>