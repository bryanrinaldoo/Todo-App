import React, { useEffect, useRef } from 'react'
import Button from '../../addBtn/Button'
import '../index.css'
import DropdownSort from './DropdownSort'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { TextField } from '@material-ui/core'

const Header = (props) => {
  const {openModal, sortFunc, title, updateFunc, editFunc} = props
  const [edit, setEdit] = useState(false)
  let navigate = useNavigate();
  const updateTodo = () =>{
    setEdit(!edit)
  }
  let menuRef = useRef();
  useEffect(() =>{
    let toggleHandler = (event) =>{
      if(!menuRef.current.contains(event.target)){
        setEdit(false)
        if(menuRef.current.firstElementChild){
          editFunc(menuRef.current.firstElementChild.firstElementChild.value)
        }
      }
    }
    document.addEventListener('mousedown', toggleHandler)
    return () =>{
      document.removeEventListener('mousedown', toggleHandler)
    }
  })
  return (
    <div className="header">

      <div className="header--top">
        <div data-cy="todo-back-button" className="iconTodo icon-back" onClick={()=>{navigate(`/`);}}></div>
        {
          edit ? <TextField data-cy="todo-title" ref={menuRef} variant="standard" value={title} onChange={event => updateFunc(event.target.value)} /> : <h1 ref={menuRef} data-cy="todo-title" className='header-title' onClick={updateTodo}>{title}</h1> 
        }
        <div data-cy="todo-edit-button" className="iconTodo icon-edit"></div>
      </div>

      <div className="header--top">
        <DropdownSort sortHandle={sortFunc}/>
        <Button datacy="todo-add-button" buttonHandler={openModal} label="Tambah"/>
      </div>

    </div>
  )
}

export default Header