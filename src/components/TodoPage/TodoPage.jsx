import React from 'react'
import Todos from './todoContent/Todos'
import {useParams } from "react-router-dom";
import Header from './todoHeader/Header';
import Container from '@material-ui/core/Container';
import TodoModal from '../modal/TodoModal';
import { useState, useEffect } from 'react';
import AlertModal from '../modal/AlertModal';
import Axios from '../../services/Axios'
import {connect, useDispatch} from 'react-redux'
import { getTodoList, deleteTodo, createTodo } from '../../actions/activityAction'

const TodoPage = () => {
    let params = useParams();
    const [openTodo, setOpenTodo] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [dataTodo, setdataTodo] = useState();
    const [sorting, setSorting] = useState(1);
    const [titleAct, setTitleAct] = useState();
    const dispatch = useDispatch();

    const handleOpenTodo = () =>{
        setOpenTodo(!openTodo)
    }
    const handleOpenAlert = (data) =>{
        setOpenAlert(!openAlert)
        setdataTodo(data)
    }
    const handleSort = (idSort) =>{
        setSorting(idSort)
    }
    const deleteTodoFunc = () =>{
        // TODO: bikin biar ga refresh
        refresh()
        refresh()
        dispatch(deleteTodo(dataTodo.id))
        setOpenAlert(!openAlert)
    }
    const createTodoFunc = (title, priority) =>{
        // TODO: bikin biar ga refresh
        refresh()
        refresh()
        handleOpenTodo()
        dispatch(createTodo({
            "activity_group_id": params.todoID,
            "title": title,
            "priority": priority
        }))
    }
    const handleUpdate = (title) =>{
        setTitleAct(title)
    }

    //get activity title
    useEffect(() => {
        Axios.get('activity-groups/' + params.todoID)
        .then((res) => {
          const dataAct = res.data;
          setTitleAct(dataAct.title)
        })
        .catch((error) =>{
          console.log(error);
        })
      }, [])
    const refresh = () =>{
        dispatch(getTodoList(params.todoID, sorting));
    }
    useEffect(() => {
        refresh();
    },[sorting])
    return (
        <Container maxWidth="md"> 
            <Header openModal={handleOpenTodo} sortFunc={handleSort} title={titleAct} updateFunc={handleUpdate}/>
            <Todos openFunc={handleOpenAlert} updateFunc={refresh}/>
            <TodoModal open={openTodo} handle={handleOpenTodo} handleCreate ={createTodoFunc}/>
            <AlertModal open={openAlert} handle={handleOpenAlert} type="List Item" title={dataTodo ? dataTodo.title : ''} alertHandle={deleteTodoFunc}/>
        </Container>
    )
}

export default connect()(TodoPage);