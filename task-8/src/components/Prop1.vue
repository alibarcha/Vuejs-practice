<template>
    <div id="prop1">
        <h2>Prop 1 component.</h2>
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Field</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in apiData" v-bind:key="item.id">
                    <td >{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.number}}</td>
                    <td>{{item.field}}</td>
                </tr>
            </tbody>

        </table>

        <br><hr><br>
        <prop-2 name="this is prop data" v-bind:title="title" num=20 boo=true v-bind:lists="students" v-bind:man="manager" v-bind:usersData="apiData"  ></prop-2>
        <br>
        <button v-on:click="alertfun">click</button>
       
    </div>
</template>

<script>
import Prop2 from './Prop2.vue'
export default {
    name:'Prop1',
    components:{
        Prop2
    },
    data (){
        return {
            title:'this is prop title',
            students:['william','son','steve job','joy'],
            manager:{
                fname:'william ',
                lname:'son',
                age:30
            },

            apiData:[
                {name:'william son',email:'abc@gmail.com',number:237392390,field:'frontend dev'},
                {name:'json roy',email:'cde@gmail.com',number:438392390,field:'php dev'},
                {name:'steve ',email:'xyz@gmail.com',number:237392390,field:'frontend dev'},
                {name:' son',email:'abc@gmail.com',number:3892390,field:'wordpress dev'},
                {name:'jordan',email:'dfc@gmail.com',number:38392390,field:'backend developer'},
            ]

        }
    },
    methods:{
        alertfun:function(){
            alert("this is prop alert message")
        }
    }


}
</script>

<style scoped>
  #prop1{
    border: 1px solid;
    padding: 20px;
  }
</style>