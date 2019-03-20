
Vue.component('todo-item',{
  props:['todo'],
  template:"<p>{{ todo.text }}</p>"
});

Vue.component('todo-list',{
  props:['list'],
  template:"<p>{{ list.text }}</p>"
});

var app = new Vue({
  el:'#app1',
  data:{
    Todos:[
      {id:0, text:"todo0"},
      {id:1, text:"todo1"},
      {id:2, text:"todo2"},
      {id:3, text:"todo3"},
      {id:4, text:"todo4"}
    ],
    //할일
    //배열 안에 python, c++, java, object-c 값으로 갖는
    //Language 프로퍼티를 추가하여 위에 제작한 todo-list 컴포넌트에 전달, 배열 값을 모두 for loop로 출력
    Todo: [
      {id:5, text:"python"},
      {id:6, text:"c++"},
      {id:7, text:"java"},
      {id:8, text:"object-c "}
    ],
  }
});
