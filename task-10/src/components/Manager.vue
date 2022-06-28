<template>
    <div id="manager">
           <h3>Manager : {{message}} </h3> 
    </div>
</template>

<script>
import EventBus from '../main'
export default {
    name:'Manager',
    data(){
        return {
            message:"Default message"
        }
    },
    mounted(){
       EventBus.$on("emiteData",data=>{
        this.message=data
       })
    }

}
</script>

<style scoped>

</style>