<template>
   <div id="home">
        <h1>Home page component</h1>
        <user-app></user-app>
   </div>
</template>

<script>
import User from '../components/User.vue'
export default {
    name:'Home',
    components:{
        'user-app':User

    }

}
</script>

<style scoped>
#home{
    text-align: center;
}
h1 {
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  color: lightgreen;
}
</style>