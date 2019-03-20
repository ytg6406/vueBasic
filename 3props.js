Vue.component('sibling-com',{
  props:['passedMessage'],
  template:"<p>{{ passedMessage }}</p>"
});

Vue.component('child-com',{
  props:['shareData'],
  template:"<p>{{ shareData }}</p>"
});

var app = new Vue({
  el:'#app1',
  data:{
    message : "props Data",
    anotherMessage:"sibling component"
  }
});
