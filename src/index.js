import './style.css';

// import { TodoList } from './classes/todo-list.class.js';
// import { Todo } from './classes/todo.class.js';
// import { saludar } from './js/componentes.js';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea = new Todo( 'Aprender javaScript!!!');


todoList.nuevoTodo( tarea );

// tarea.completado = true;


console.log(todoList);
crearTodoHtml(tarea)