https://youtu.be/oUmVFHlwZsI

// Code with Ahsan

angular data-binding

// try to use signal for future 
signal is nothing but function for data binding

Passing data from home to greetimg components

// Parent components sending home.components.ts  sending data to child components to greeting componets
// here declare a value and sending using input 

 homeMessage =  signal('hello World from home')

 // greeting.components.ts
    message =  input()

// Binding in template 

// <p [message] = "homeMessage()" >

// Event Listener in angular

### servcie in angular 

export type Todo = {
    userId : number;
    completed : boolean;
    title : string
    id : number;
}

service created
 ng g s services/todos

 todo.service.ts
 import { Todo } from '../model/todo.type';

 export class TodosService {
  todoItem: Array<Todo> = [
    {
    title : 'groceries',
    id :0,
    userId : 1,
    completed :false 
  },
  {
    title : 'car wash',
    id :1,
    userId : 1,
   

 // todos.components.ts
 todoService = inject(TodosService)

 // Making Http Call