//route 컴포넌트 선언
var Foo = {template:"<div>foo Component</div>"};
var Bar = {template:"<div>bar Component</div>"};

//routes 선언
var routes = [
  {path:'/foo', component:Foo},
  {path:'/bar', component:Bar},
];

//router 생성
var router = new VueRouter({
  routes
});

var app=new Vue({
  router
}).$mount("#app");
