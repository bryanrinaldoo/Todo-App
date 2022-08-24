import React from 'react'
import { useState } from 'react';

const TodoCard = (props) => {
  const {todos} = props;
  const {id, title, is_active, priority} = todos;
  const [isActive, setActive] = useState(is_active);
  
  const deleteTodos = () =>{
    // TODO: masukin API 
    console.log("delete", id);
  }
  const updateActive = () =>{
    // TODO: masukin API 
    setActive(!isActive);
  }
  return(
    <div data-cy="todo-item" className='todosCard'>

      <div className="form-check">
        <input data-cy="todo-item-checkbox" type="checkbox" id="default-20558" className="form-check-input" checked={!isActive} onChange={()=>{setActive(!isActive)}}/>
        <div data-cy="todo-item-priority-indicator" className={`label-indicator ${priority}`}></div>
        <span data-cy="todo-item-title" className={!isActive ? 'todo-done' : ''}>{title}</span>
        <div data-cy="todo-item-edit-button" className="iconTodoItem icon-edit"></div>
      </div>
      <div data-cy="todo-item-delete-button" className="iconTodoItem icon-trash" onClick={deleteTodos}></div>  
    </div>
  ) 
}

export default TodoCard