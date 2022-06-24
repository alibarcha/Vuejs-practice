<template>
    <div id="content">
        <h2>Playlist</h2>
            <h4>{{traner}}</h4>
        <ul v-for="link in links" v-bind:key="link.id">
            <li><a v-bind:href="link.url">{{link.name}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Content',
    data (){
        return {
            links:[
                {name:'wordpress plugin development',url:'https://v2.vuejs.org/'},
                {name:'Wp Json plugin development',url:'https://v2.vuejs.org/'},
                {name:'vue js  development',url:'https://v2.vuejs.org/'},
                {name:'wordpress plugin development',url:'https://v2.vuejs.org/'},
                {name:'Wp json Rest Api development',url:'https://v2.vuejs.org/'},
            ]
        }
    },
    props:{
        traner:String
    }

}
</script>

<style scoped>
#content{
    text-align: center;
    padding: 25px;
    background: #eee;
}
ul{
    list-style-type: none;

}
ul li{
    padding: 11px;
}
ul li a{
    font-size: 25px;
    text-transform: capitalize;
}
</style>