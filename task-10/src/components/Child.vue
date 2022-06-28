<template>
    <div id="child">

            <h2>This is child component ..</h2>
            <p> Child data message : {{propmessage}}</p>
            <button v-on:click="updatamessage">Change parent data & child data</button>
    </div>
</template>

<script>
export default {
    name:'Child',
    props:{
        propmessage:{
            type:String
        }
    },
    methods:{
        updatamessage:function(){
            // this.propmessage='this is new data'
            this.$emit('updataparentmessage',"this is updata data in child component")
        }
    }

}
</script>

<style scoped>

</style>