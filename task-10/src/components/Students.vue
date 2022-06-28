<template>
    <div id="student">
            <h2>student component</h2>
            <!-- use prop data -->
            <p> .. child message : {{message}}</p>
           
              <button v-on:click="updateMessage">Update message</button>
   
    </div>
</template>

<script>
export default {
    name:'Students',
    // props:['message']
    props:{
        message:{
            type:String,
            default:'this is default prop data'
        }
    },
      methods:{
        updateMessage:function(){
            //  this.message="this is new update message data in child component.. :)"  
            this.$emit("updateparentvariable","update message here from child component data .. ")
        }
    },
   

}
</script>

<style scoped>

</style>