export default {
    filters:{
        upper:function(value){
           return value.toUpperCase()
        },

        upperCase:function(val){
            return val.toUppercase();
        },
        snip:function(val){
            return val.slice(0,80)+ "...";
        }

      }

}