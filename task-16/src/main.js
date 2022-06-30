import Vue from 'vue'
import App from './App.vue'
// import vue resourse and use
import VueResourse from 'vue-resource'

Vue.use(VueResourse)


// custom directives
// ----------buttons modifiers --------------

Vue.directive('button', (el, binding, vnode) => {
  el.style.background = "lightgreen"

  console.log("buttons", binding)
  // small btn
  var smallbtn = binding.modifiers.smallbtn
  if (smallbtn == true) {
    el.style.padding = "7px 14px"
    el.style.fontWeight = "600"
    el.style.fontSize = "15px"
    el.style.border = "none"
  }
  // mediam btn
  var mediambtn = binding.modifiers.mediambtn
  if (mediambtn == true) {
    el.style.padding = "10px 17px"
    el.style.fontWeight = "700"
    el.style.fontSize = "17px"
    el.style.border = "none"
  }

  // large btn
  var largebtn = binding.modifiers.largebtn
  if (largebtn == true) {
    el.style.padding = "13px 21px"
    el.style.fontWeight = "800"
    el.style.fontSize = "19px"
    el.style.border = "none"
  }

})

// new custom dirctive

Vue.directive('format',{
  bind(el,binding,vnode) {
    // el.style.color="lightgreen"
    if(binding.modifiers.lightgreen==true){
      el.style.color="lightgreen"
    }

    if(binding.modifiers.gray==true){
      el.style.color="gray"
    }
  }
});

Vue.directive('gray',{
  bind(el,binding,vnode){
    el.style.background="gray"
  }
})

Vue.directive('heading',{
  bind(el,binding,vnode){
    // el.style.color="red"
    // modifier
    if(binding.modifiers.red==true){
      el.style.color="red"
    }
    // values
    if(binding.value=='underline'){
      el.style.textDecoration="underline"
      
    }

    // arguments

    if(binding.arg=='super'){
      el.style.fontSize="30px"
      el.style.color="#222"
    }
    
    
  }
})

// ************************* global import components in vue  ***************************

// ---- Global filters in vue js ------

// Vue.filter('upper',function(value){
//   return value.toUpperCase()
// })


//-------------- maxins in vue -----------
// Vue.mixin({
//   filters:{
//     upper:function(value){
//        return value.toUpperCase()
//     }
//   }

// })


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')




