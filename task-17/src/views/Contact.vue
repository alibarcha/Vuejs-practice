<template>
   <div id="contact">
        <h1>Contact page component</h1>
        <employ-app></employ-app>
   </div>
</template>

<script>
import Employ from '../components/Employ.vue'
export default {
    name:'Contact',
    components:{
        'employ-app':Employ
    }

}
</script>

<style scoped>
 #contact{
    text-align: center;
 }
 h1 {
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  color: lightgreen;
}

</style>