<template>
    <div id="data">
        <!-- ststic data load -->
        <!-- <signup-app></signup-app>
        <login-app></login-app> -->
        <br><br><hr><br>

        <!-- dynamic data load -->
        <keep-alive>
            <components v-bind:is="varia"> </components>
        </keep-alive>

        <button v-on:click="varia='signup-app'" v-button.mediambtn>SIGN UP</button>
        <button v-on:click="varia='login-app'" v-button.mediambtn>LOGIN</button>

    </div>
</template>

<script>
import Signup from './Signup.vue'
import Login from './Login.vue'
export default {
    name:'Data',
    data(){
        return {
            varia:"signup-app"
        }
    },
    components:{
        'signup-app':Signup,
        'login-app':Login,
    }

}
</script>

<style scoped>
button{
    outline: 1px solid;
    cursor: pointer;
}
button:hover{
    background: #222;
    color: white;
}

</style>