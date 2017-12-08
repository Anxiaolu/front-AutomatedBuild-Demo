angular
.module('TodoList',[])
.controller('TodosController',require('./todos-controller.js'))
.controller('AddTodoController',require('./addtodo-controller.js'))
.controller('TodoController',require('./todo-controller.js'));