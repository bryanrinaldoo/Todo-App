import React from 'react'
import Button from '../../addBtn/Button'
import '../index.css'
import DropdownSort from './DropdownSort'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  let navigate = useNavigate();
  const createTodo = () =>{
    // TODO: masuk API 
    console.log("create TODO");
  }
  const updateTodo = () =>{
    // TODO: masuk API 
    console.log("update TODO");
  }
  return (
    <div className="header">

      <div className="header--top">
        <div data-cy="todo-back-button" className="iconTodo icon-back" onClick={()=>{navigate(`/`);}}></div>
        <h1 data-cy="todo-title" className='header-title'>New Activity(API title)</h1> 
        <div data-cy="todo-edit-button" className="iconTodo icon-edit" onClick={updateTodo}></div>
      </div>

      <div className="header--top">
        <DropdownSort/>
        <Button data-cy="todo-add-button" buttonHandler={createTodo}/>
      </div>

    </div>
  )
}

export default Header