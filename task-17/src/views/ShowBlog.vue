<template>
  <div id="showblog">
    <h1>show Blog Page</h1>
    <div id="blog" v-for="item in Data" v-bind:key="item.id">
     <h3> {{ item.title }}</h3>
      <br />
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      Data: {
        title: [],
        body: [],
      },
    };
  },

  mounted() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        console.log(data);
        this.Data = data.body.slice(0, 20);
      });
  },
};
</script>

<style scoped>
#showblog {
  width: 70%;
  margin: 20px auto;
  padding: 15px;
}
h1 {
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  color: lightgreen;
}
button {
  margin-left: 290px;
}
</style>