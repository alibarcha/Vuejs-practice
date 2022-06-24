<template>
   <div id="header">
      <header>
         <h1>{{msg}}</h1>
         <p>{{name}}</p>
         <p><a v-bind:href="url">https://vuejs.org/guide/components</a></p>
      </header>
   </div>
</template>

<script>
export default {
    name:'Header',
    data (){
        return {
            msg:'wellcome To vue js play list ',
            url:'https://vuejs.org/guide/components/props.html#boolean-casting'
        }
    },
    props:{
        name:String

    }

}
</script>

<style scoped>
#header{
    background: #3c40c6;
    text-align: center;
    color: white;
    padding: 5px;

}
header{
    text-transform: uppercase;
    padding: 15px;
}
p{

    margin: 8px 0;
}
header a{
    color: white;
}
</style>