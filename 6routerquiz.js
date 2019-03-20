//route 컴포넌트 선언
var Login = {
  template:`<div>
              Login Form
              <router-view></router-view>
            </div>`
};

var LoginForm = {
  template:`<form action='/' method='post'>
              <div>
                <label for='account'> ID : </label>
                <input type='email' id='account'>
              </div>
              <div>
                <label for='password'> Password : </label>
                <input type='password' id='password'>
              </div>
              <router-view></router-view>
            </form>`
};

var List = {
  template: `
    <div>
      List Section
      <router-view></router-view>
    </div>
  `,
};
var ListItem = {
  template: `
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  `,
};

var Main = {
  template:`<div>
              Main View
              <router-view></router-view>
            </div>`
};
var MainLItem = {
  template: `
    <div>
      <ul>
        <li>main1</li>
        <li>main2</li>
        <li>main3</li>
      </ul>
    </div>

  `,
};

//routes 선언
var routes = [
  {path:'/login',
   component:Login,
   children:[
     {path:'', component:LoginForm}
   ]},
  {path:'/list',
   component:List,
   children:[
     {path:'', component:ListItem}
   ]},
  {path:'/main',
   component:Main,
   children:[
     {path:'', component:MainLItem}
   ]}
];

//router 생성
var router = new VueRouter({
  routes
});

var app=new Vue({
  router
}).$mount("#app");
