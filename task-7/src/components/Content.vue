<template>
    <div id="content">
        <h2>Playlist</h2>
            <p>{{para}}</p>
            <h4>{{traner}}</h4>
        <ul v-for="link in links" v-bind:key="link.id">
            <li><a v-bind:href="link.url">{{link.name}}</a></li>
        </ul>
        <br><hr><hr><br>
        <!-- courses props -->
        <ul>
            <li v-for="course in  Allcourses" v-bind:key="course.id"><a v-bind:href="course.url">{{course.name}}</a> </li>
        </ul>


        {{myfun()}}
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
    // props:{

    //     traner:String,
    //     para:String,
    //     Allcourses:Array
        
    //    }
    props:['traner','para','Allcourses'],
    methods:{
        myfun:function(){
            console.log(this.traner)
            console.log(this.para)
            console.log(this.Allcourses[0].name)
            console.log(this.Allcourses[1].url)
            console.log(this.Allcourses)
           
        }
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