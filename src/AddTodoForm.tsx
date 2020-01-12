import React, { useState,ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps{
    addTodo:AddTodo
}

export const  AddTodoForm:React.FC<AddTodoFormProps> = ({addTodo}) =>{
    const [newtodo,setNewTodo] = useState("");
    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
    setNewTodo(e.target.value)
    }
    const handleSubmit =(e:FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        addTodo(newtodo);
        setNewTodo("")

    }
    return (
        <div>
            <form>
                <input type="text" value={newtodo} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Add Todo</button>
            </form>
            
        </div>
    )
}
