import React from 'react'
import { useState } from 'react';
import { useDispatch , connect} from 'react-redux';
import { updateTodo } from '../../../actions/activityAction';

const TodoCard = (props) => {
  const {todos, openModal, update} = props;
  const {id, title, is_active, priority} = todos;
  const dispatch = useDispatch();
  const updateActive = () =>{
    update()
    update()
    dispatch(updateTodo(id, {'is_active' : !is_active}))
  }
  return(
    <div data-cy="todo-item" className='todosCard'>

      <div className="form-check">
        <input data-cy="todo-item-checkbox" type="checkbox" id="default-20558" className="form-check-input" checked={!is_active} onChange={updateActive}/>
        <div data-cy="todo-item-priority-indicator" className={`label-indicator ${priority}`}></div>
        <span data-cy="todo-item-title" className={!is_active ? 'todo-done' : ''}>{title}</span>
        <div data-cy="todo-item-edit-button" className="iconTodoItem icon-edit"></div>
      </div>
      <div data-cy="todo-item-delete-button" className="iconTodoItem icon-trash" onClick={event => openModal(todos)}></div>  
    </div>
  ) 
}

export default TodoCard