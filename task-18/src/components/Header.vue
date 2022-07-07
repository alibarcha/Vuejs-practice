<template>
    <div id="header">
         <div>
             <h2><router-link to="/">Bootstrap Css</router-link></h2>
         </div>
         <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About us</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/showblog">Show Blog</router-link></li>
            <li><router-link to="/contact">Contact us</router-link></li>
          
         </ul>
    </div>
</template>

<script>
export default {
    name:'header',
}
</script>

<style scoped>
  #header{
    background: #222;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100px;
    padding: 0 35px;
  }
  #header h2 a{
    color: lightgreen;
    font-size: 30px;
    text-decoration: none;
  }
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  ul li a{
    text-decoration: none;
    color: white;
    text-transform: capitalize;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    font-weight: 500;
    padding: 0 30px;
  }
   ul li a:hover{
    border: 1px solid;
    padding: 10px 15px;
    border-color: lightgreen;
    border-top: 2px solid;
    border-right: 2px solid;
    border-right-color: red;
    border-top-color: red;
    color: orangered;
   }

</style>