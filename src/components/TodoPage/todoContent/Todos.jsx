import React ,{useEffect, useState} from 'react'
import Axios from '../../../services/Axios'
import { CircularProgress } from '@material-ui/core';
import TodoNull from './TodoNull';
import TodoCard from './TodoCard';

const Todos = (props) => {
  const {todoID} = props;
  const [Todos, setTodos] = useState();
  console.log(todoID);
  useEffect(() => {
    Axios.get('todo-items?activity_group_id=' + todoID)
    .then((res) => {
      const dataTodos = res.data.data;
      setTodos(dataTodos)
    })
    .catch((error) =>{
      console.log(error);
    })
  }, [])

console.log(Todos);
  return (
    <>
      {Todos ? (
        Todos.length > 0 ?
          (<div className='todos'>
            {Todos.map(todos => (
              <TodoCard todos={todos}/>
            ))}
          </div>)
          : <TodoNull/>
      )
      : <CircularProgress/>}
    </>
  )
}

export default Todos