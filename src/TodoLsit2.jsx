import React from 'react'
import { ToDoList } from './ToDoList'


interface ToDoListProps {
    todos: Array<Todo>;
    toggleTodo: toggleTodo;
}

export const TodoLsit2: React.FC<ToDoListProps>=({todos,toggleTodo})=> {
    return (
        <ul>
           {todos.map(todo=>{
               return <ToDoList key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
           })} 
        </ul>
    )
}
