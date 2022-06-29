<template>
    <div id="blog">
            <h2>show Blogs from Rest Api</h2><br>
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
                        <td>{{item.body}}</td>
                    </tr>
                </tbody>
            </table>

            <h2 v-heading:super="'underline'">Shows Blogs In Text</h2>

            <div id="blogDiv" v-for="(item,index) in showDatas" v-bind:key="item.id">
                <h3 v-format.lightgreen>{{index}} : {{item.title}}</h3>
                <p v-format.gray>{{item.body}}</p>
            </div>
            
    </div>
</template>

<script>
export default {
    name:'ShowBlogs',
    data(){
        return {
            showDatas:[]
        }
    },
    created (){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.showDatas=data.body.slice(0,8)
            console.log(data)
        });

    }
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