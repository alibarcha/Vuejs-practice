import Vue from 'vue'
import App from './App.vue'


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

// ************************* global import components in vue  ***************************

Vue.config.productionTip = false
// -----------------Event bus instance-----------
export const EventBus = new Vue();


new Vue({
  render: h => h(App),
}).$mount('#app')




