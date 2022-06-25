<template>
    <div id="footer">
        <footer>
            <p>{{copyright}}</p>
            <span>{{title}}</span>
        </footer>
    </div>
</template>

<script>
export default {
    name:'Footer',
    data (){
        return {
            copyright:'copyright @vue js playlist in 2022'
        }
    },
    props:{
        title:String
    }

}
</script>

<style scoped>
    #footer{
         background: #3c40c6;
        text-align: center;
        color: white;
        padding: 14px;
    }
    p{
        padding: 5px;
        font-size: 25px;
    }
</style>