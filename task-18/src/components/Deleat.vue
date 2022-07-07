<template>
    <div id="deleat">
            <h2>Users Data From Api</h2>
            
            <table border="1" cellSpacing="0">
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item,index) in lists" v-bind:key="item.id">
                        <td>{{index}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.username}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.website}}</td>
                        <td>{{item.address.city}}</td>
                        <td><button v-on:click="deleateuser(item.id)">Deleate</button></td>
                    </tr>
                </tbody>

            </table>
          
    </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
    name:'Deleat',
    data(){
        return {
            lists:[],
        }
    },
    mounted(){
     this.getUsers()
    },
    methods:{
        getUsers:function(){
               this.axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
                console.log(response)
                this.lists=response.data
        })
        },
        deleateuser:function(id){
            // alert('Are You Sure To Deleate User')
            this.axios.delete('https://jsonplaceholder.typicode.com/users/'+ id).then((result)=>{
                console.log(result)
                this.getUsers()
           

            })
        }

    }

}
</script>

<style scoped>
#deleat{
    width: 80%;
    margin: 25px auto;
    text-align: center;
}
table {
  width: 100%;
}
table thead {
  background: #222;
  line-height: 30px;
  color: white;
  /* margin-bottom: 20px; */
}
table tbody {
  line-height: 25px;
  font-size: 18px;
  word-spacing: 12px;
 
}
table tbody tr:nth-child(even) {
  background: #eee;
}
button{
    cursor: pointer;
    width: 100%;
    padding: 10px;
    border-radius: 0;
    border: none;
    background: lightgreen;
    color: white;
}
button:hover{
    background: red;
    color: white;
}
</style>