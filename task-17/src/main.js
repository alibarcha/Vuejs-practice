import Vue from 'vue'
import App from './App.vue'
// import vue resourse and use
import VueResourse from 'vue-resource'
Vue.use(VueResourse)

// ------------------ routing Area ------------
// import routes file
import routes from './routes'
// import router pakage
import VueRouter from 'vue-router'
const router=new VueRouter({
  routes,
  mode:'history'
})
Vue.use(VueRouter)


Vue.config.productionTip = false


new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')




