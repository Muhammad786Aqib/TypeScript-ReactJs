import React from "react";


interface ToDoListProps{
    todo:Todo;
    toggleTodo:ToggleTodo;
    };

    //tuple
    let aTuple:[string,number]= ["aqib,",3];
    // enum 
    enum Codes {first=1,second=2};
    //interface

 interface todo{
     name:string,
     compelte:boolean;
 }



export const ToDoList:React.FC<ToDoListProps>=({todo,toggleTodo})=> {
    return (
        <React.Fragment>
         <li>
             <label style={{textDecoration:todo.complete ?"line-through":"none"}}>
             <input type="checkbox" checked={todo.complete} onChange={()=>toggleTodo(todo)}/>
             {todo.text}
             </label>
    <p>the value {aTuple[0]} and the {aTuple[1]}</p>
          </li>
        </React.Fragment>
    )
}
