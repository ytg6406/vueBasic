import Vue from 'vue'
import App from './App.vue'
//ES6 기준
import NavHeader from './components/NavHeader.vue'
import GlobalCmp from './components/globalCmp.vue'

//ES5 기준
// var NavHeader = require('./components/NavHeader.vue');
Vue.component('nav-header',NavHeader);

Vue.component('global-cmp',GlobalCmp);

new Vue({
  el: '#app',
  render: h => h(App)
})
