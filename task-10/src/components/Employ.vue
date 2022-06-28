<template>
   <div id="employ">
            <!-- <p>Employ component</p> -->

            <button v-on:click="passData()">Click here to send data</button>
   </div>
</template>

<script>
import EventBus from '../main'
export default {
    name:'Employ',
    methods:{
        passData:function(){
            console.log("This is simple message passed..")
        // event name first then data
            EventBus.$emit('emiteData','This is simple message passed..')
        }
    }

}
</script>

<style scoped>
  #employ{
    border: 1px solid;
    padding: 15px;
  }

</style>