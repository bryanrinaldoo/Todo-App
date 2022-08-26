import React ,{useEffect, useState} from 'react'
import Axios from '../../../services/Axios'
import { CircularProgress } from '@material-ui/core';
import TodoNull from './TodoNull';
import TodoCard from './TodoCard';
import { connect } from 'react-redux';

const  mapStateToProps = (state, props) => {
  const {openFunc, updateFunc, editFunc} = props
  return{
    getTodoList: state.activities.getTodoList,
    openFunc,
    updateFunc,
    editFunc
  }
}

const Todos = (props) => {

  return (
    <>
      {props.getTodoList ? (
        props.getTodoList.length > 0 ?
          (<div className='todos'>
            {props.getTodoList.map(todos => (
              <TodoCard todos={todos} openModal={props.openFunc} update={props.updateFunc} openEdit={props.editFunc}/>
            ))}
          </div>)
          : <TodoNull/>
      )
      : <CircularProgress/>}
    </>
  )
}

export default connect(mapStateToProps, null)(Todos);