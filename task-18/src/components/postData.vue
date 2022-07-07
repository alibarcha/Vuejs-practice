<template>
  <div id="post">
    <h2>post Data component</h2>
    <form method="post" @submit="submit">
      <input
        type="number"
        name="userid"
        placeholder="User ID"
        v-model="post.userId"
      /><br />
      <input
        type="text"
        name="title"
        placeholder="title"
        v-model="post.title"
      /><br />
      <input
        type="text"
        name="body"
        placeholder="body"
        v-model="post.body"
      /><br />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Post",
  data() {
    return {
      post: {
        userId: null,
        title: null,
        body: null,
      },
    };
  },
  methods: {
    submit: function (e) {
      console.log("submited");
      this.axios
        .post("https://jsonplaceholder.typicode.com/posts", this.post)
        .then((result) => {
          console.log(result);
        });
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
#post {
  width: 80%;
  margin: 20px auto;
  text-align: center;
}
form {
  width: 400px;
  display: flex;
  margin: 10px auto;
  flex-direction: column;
}
input {
  padding: 10px;
}
</style>