import React,{useState} from 'react';
import './App.css';
import { TodoLsit2 } from './TodoLsit2';
import { AddTodoForm } from './AddTodoForm';

const initialTodos:Array<Todo>=[
  {text:"walk the dog",complete:true},
  {text:"write app",complete:false}
]
const App: React.FC = () => {
  const [todos, setTodes]=useState(initialTodos);

const toggleTodo:ToggleTodo = selectedTodo =>{
  const newTodes = todos.map(todo=>{
    if(todo === selectedTodo){
      return{
        ...todo,
        complete: !todo.complete
      };
    }
    return todo;
  });
  setTodes(newTodes)
}
const addTodo:AddTodo = newTodo=>{
  newTodo.trim() !=="" &&
  setTodes([...todos,{text:newTodo,complete:false}])
}
  return (
    <div className="App">
    <TodoLsit2 todos={todos} toggleTodo={toggleTodo} />
    <AddTodoForm addTodo={addTodo}/>
      
    </div>
  );
}

export default App;
