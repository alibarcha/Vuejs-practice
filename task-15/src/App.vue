<template>
  <div id="app">
    <!-- Http request Api form send data -->

    <form action="post">
      <h3>Blog Data</h3>
      <label for=""
        >Title
        <input
          type="text"
          placeholder="Titl"
          v-model.lazy="userData.title" /></label
      ><br />
      <label for=""
        >Body
        <input
          type="text"
          placeholder="body"
          v-model.lazy="userData.body" /></label
      ><br />
      <label for=""
        >User Id
        <input
          type="number"
          placeholder="User ID"
          v-model.lazy="userData.UserId" /></label
      ><br />

      <button v-on:click.prevent="postData">Submit Data</button>
    </form>
    <br /><br /><br />
    <div id="preview">
      <h4>Title: {{ userData.title }}</h4>
      <h4>Body: {{ userData.body }}</h4>
      <h4>User id: {{ userData.UserId }}</h4>
    </div>

    <br><br>  <hr><hr><br><br>

      <showBlog-app></showBlog-app>



  </div>
</template>

<script>
import ShowBlogs from './components/ShowBlogs.vue'
export default {
  name: "App",
  components: {
    'showBlog-app':ShowBlogs,
  },
  data() {
    return {
      userData: {
        title: "",
        body: "",
        UserId: "",
      },
    };
  },
  methods: {
    postData: function (e) {
      // console.log("submit")
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.userData.title,
          body: this.userData.body,
          UserId: this.userId,
        })
        .then(function (data) {
          console.log(data);
        });

      e.preventDefault();
    },
  },
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
