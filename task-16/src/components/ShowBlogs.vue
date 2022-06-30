<template>
    <div id="blog">
            <h2>show Blogs from Rest Api  </h2><br>
            <p >{{title | upper }}</p>
            <a v-bind:href="url" v-bind:title="urlTitle | upper">go to google.com</a>
                <!-- {{showDatas}} -->
            <table border="1" cellspacing="0">
                <thead>
                    <tr v-format>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in showDatas" v-bind:key="item.id">
                        <td v-gray>{{item.id}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.body | snip}}</td>
                    </tr>
                </tbody>
            </table>

            <h2 v-heading:super="'underline'">Shows Blogs In Text</h2>

            <div id="blogDiv" v-for="(item,index) in showDatas" v-bind:key="item.id">
                <h3 v-format.lightgreen>{{index}} : {{item.title}}</h3>
                <p v-format.gray>{{item.body | snip}}</p>
            </div>
            
    </div>
</template>

<script>
// import mixins file
import filtersmixins from '../mixins/filters'
export default {
    mixins:[
        filtersmixins
    ],
    name:'ShowBlogs',
    data(){
        return {
            title:'this paragraphy from Apis ',
            urlTitle:'go to google.com',
            url:'http://google.com',
            showDatas:[]
        }
    },
    created (){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.showDatas=data.body.slice(0,8)
            console.log(data)
        });

    },
    // filters:{
    //     upperCase:function(val){
    //         return val.toUppercase();
    //     },
    //     snip:function(val){
    //         return val.slice(0,80)+ "...";
    //     }
    // }
}
</script>

<style scoped>
 table{
    width: 70%;
    margin: 10px auto;
    
 }
 table thead {
        background: #eee;
        line-height: 50px;
        
 }
 #blogDiv{
    width: 70%;
    margin: 20px auto;
    text-align: left;
 }
 #blogDiv h3{
    text-decoration: underline;
    text-transform: capitalize;
 }
 #blogDiv p{
    padding:10px 0  10px 30px;
 }

</style>