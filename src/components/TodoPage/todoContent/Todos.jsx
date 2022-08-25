import React ,{useEffect, useState} from 'react'
import Axios from '../../../services/Axios'
import { CircularProgress } from '@material-ui/core';
import TodoNull from './TodoNull';
import TodoCard from './TodoCard';

const Todos = (props) => {
  const {todoID, openFunc, sortOpt} = props;
  const [Todos, setTodos] = useState();
  useEffect(() => {
    Axios.get('todo-items?activity_group_id=' + todoID)
    .then((res) => {
      const dataTodos = res.data.data;
      switch (sortOpt) {
        case 1:
          setTodos(dataTodos.sort((a, b) => (a.id < b.id) ? 1 : -1));
          break;
        case 2: 
          setTodos(dataTodos.sort((a, b) => (a.id > b.id) ? 1 : -1));
          break;
        case 3:
          setTodos(dataTodos.sort((a, b) => (a.title > b.title) ? 1 : -1));
          break;
        case 4: 
          setTodos(dataTodos.sort((a, b) => (a.title < b.title) ? 1 : -1));
          break;
        case 5:
          setTodos(dataTodos.sort((a, b) => (a.is_active < b.is_active) ? 1 : -1));
          break;   
      }
    })
    .catch((error) =>{
      console.log(error);
    })
  }, [sortOpt])

  return (
    <>
      {Todos ? (
        Todos.length > 0 ?
          (<div className='todos'>
            {Todos.map(todos => (
              <TodoCard todos={todos} openModal={openFunc}/>
            ))}
          </div>)
          : <TodoNull/>
      )
      : <CircularProgress/>}
    </>
  )
}

export default Todos