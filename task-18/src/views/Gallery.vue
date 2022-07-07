<template>
  <div id="gallery">
    <h1>Gallery page component</h1>
        <div class="container">
    <div id="galleryData" v-for="item in albams" v-bind:key="item.id">
      <div id="card">
        <img v-bind:src="item.url" alt="image" />
      </div>
      <h4>{{ item.title }}</h4>
    </div>
  
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      albams: {
        title: [],
        url: [],
      },
    };
  },

  mounted() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function (data) {
        console.log(data);
        this.albams = data.body.slice(0, 10);
      });
  },
};
</script>

<style scoped>
#gallery {
  width: 60%;
  margin: 15px auto;
  padding: 10px;
  text-align: center;
  
}

h1 {
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  color: lightgreen;
}

#galleryData{
    border: 1px solid;
    margin: 30px auto;
    width: 400px;
    height: 350px;
    padding: 20px;
   overflow-y: auto;


}




#galleryData img{
    width: 100%;
    height: 300px;
    
}
</style>