import Vue from 'vue'
import App from './App.vue'

//****************** */ custom global Directive **********************
/*
// el is dom element , binding is a properties of element
Vue.directive('favcolor',{
  bind:function(el,binding,vnode){
    el.style.color="red"
    console.log(el)    // Dom element
    console.log(binding)   // properties of element
    console.log(vnode)       // properties of element

  },
})

// second method
Vue.directive('font',(el,binding)=>{
  el.style.fontSize="20px"
})


Vue.directive('upper',(el,binding,vnode)=>{
  el.style.textTransform="upperCase"
  el.style.background="#eee"
})

Vue.directive('underline', {
  bind:function(el,binding,vnode){
    el.style.textDecoration="underline 13px dotted black"
  }
})



// custom directives end
*/

// =============== Global Custom Directives in vue js =================

Vue.directive('maincolor',(el,binding,vnode)=>{
  //  el bind dom , binding is properties of element, vnode also elements properties
  el.style.color="lightgreen"
  el.style.background="#222"
  // console.log(el)
  // console.log(binding)
  // console.log(vnode)

})

Vue.directive('mainbtn',(el,binding,vnode)=>{
    el.style.color="#222"
    el.style.background="lightgreen"
    el.style.padding="10px 15px"
    el.style.border="none"
   
})

Vue.directive('uppercase',(el,binding,vnode)=>{
  el.style.textTransform="uppercase"
  // console.log(binding.name)
})


//----------------- new directive logic arguments & modifiers -------------

Vue.directive('custombtn',(el,binding)=>{
  // el.style.color="red"
  console.log(binding)
  // arguments
  var dirArgument=binding.arg;
  // ------------modifiers
  var mod=binding.modifiers.change;
  if(mod==true){
    el.style.color="222"
    el.style.background="yellow"
    el.style.border="none"
    el.style.padding="10px 15px"
     el.style.fontSize="20px"
     el.style.fontWeight="bold"
  }




  console.log(mod)
  if(dirArgument=="red"){
    el.style.color="222"
    el.style.background="red"
    el.style.border="none"
    el.style.padding="10px 15px"
     el.style.fontSize="20px"
     el.style.fontWeight="bold"
    }
    else if (dirArgument=="green") {
    el.style.color="#222"
    el.style.background="lightgreen"
    el.style.border="none"
    el.style.padding="10px 15px"
    el.style.fontSize="20px"
    el.style.fontWeight="bold"
    
  }
  else if(dirArgument=="gray"){
    el.style.color="#222"
    el.style.background="#eee"
    el.style.border="none"
    el.style.padding="10px 15px"
     el.style.fontSize="20px"
     el.style.fontWeight="bold"
     
    }
 
  
})


// ----------buttons modifiers --------------

  Vue.directive('button',(el,binding,vnode)=>{
    el.style.background="lightgreen"

 

    console.log("buttons", binding)
    // small btn
    var smallbtn=binding.modifiers.smallbtn
    if(smallbtn==true){
      el.style.padding="7px 14px"
      el.style.fontWeight="600"
      el.style.fontSize="15px"
      el.style.border="none"
    }
    // mediam btn
    var mediambtn=binding.modifiers.mediambtn
    if(mediambtn==true){
      el.style.padding="10px 17px"
      el.style.fontWeight="700"
      el.style.fontSize="17px"
      el.style.border="none"
    }

       // large btn
       var largebtn=binding.modifiers.largebtn
       if(largebtn==true){
         el.style.padding="13px 21px"
         el.style.fontWeight="800"
         el.style.fontSize="19px"
         el.style.border="none"
       }


   

  })









Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')




