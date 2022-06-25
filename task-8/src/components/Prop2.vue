<template>
    <div id="prop2">
        <h2>prop 2 component</h2>
        <p>{{name}}</p>
        <p>{{title}}</p>
        <p>{{num}}</p>
        <p>{{boo}}</p>

        {{lists}}
        <p v-for="list in lists" :key="list.id">{{list}}</p>
            
        <p>Name: {{man.fname}} - {{man.lname}} Age : {{ man.age}}</p>

            <table border="1" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>field</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in usersData" v-bind:key="item.id">
                        <td>{{item.name}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.number}}</td>
                        <td>{{item.field}}</td>
                    </tr>
                </tbody>
            </table>



        <hr><hr>
        <h3>Used props Data in child component</h3>
        <h5>{{name}}</h5>
        <p>{{name}}</p>
        <input type="text" :value="name">
        <h4>{{lists}}</h4>
        <h4>{{num}}</h4>
        <h4>{{man}}</h4>

        <button v-on:click="alertfun">prop2 btn</button>

        <h3> update data:::{{updatetitle}}</h3>
        <h3>{{title}}</h3>
       

    </div>
</template>

<script>
import Prop1 from './Prop1.vue'
export default {
    name:'Prop2',
    components:{
        Prop1
    },
    data(){
        return {
            name:'name data',
            updatetitle:this.title
        }
    },
    props:{
        // name:String,
        name:{
            type:String,
            // required:true,
            default:'this is default data of name property'
        },
        title:String,
        num:Number,
        boo:Boolean,
        lists:Array,
        man:Object,
      
        // usersData:Array
        usersData:{
            type:Array,
            required:true,
            default:'this is default data'
        },
        
    },
    // props:[title,num,boo]

}
</script>

<style scoped>

</style>