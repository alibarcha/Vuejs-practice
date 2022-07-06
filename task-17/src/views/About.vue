<template>
   <div id="about">
        <h1>About page component</h1>
        <showblog-app></showblog-app>
   </div>
</template>

<script>
import ShowBlogs from '../components/ShowBlogs.vue'
export default {
    name:'about',
    components:{
        'showblog-app':ShowBlogs,

    }

}
</script>

<style scoped>
#about{
    text-align: center;
}
h1 {
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  color: lightgreen;
}

</style>