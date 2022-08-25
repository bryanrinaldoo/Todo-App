import React from 'react'
import Todos from './todoContent/Todos'
import {useParams } from "react-router-dom";
import Header from './todoHeader/Header';
import Container from '@material-ui/core/Container';
import TodoModal from '../modal/TodoModal';
import { useState, useEffect } from 'react';
import AlertModal from '../modal/AlertModal';
import Axios from '../../services/Axios'

const TodoPage = () => {
    let params = useParams();
    const [openTodo, setOpenTodo] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [dataTodo, setdataTodo] = useState();
    const [sorting, setSorting] = useState(1);
    const [titleAct, setTitleAct] = useState();
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
    const deleteTodo = () =>{
        // TODO: manggil API 
        setOpenAlert(!openAlert)
        console.log(dataTodo);
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
    return (
        <Container maxWidth="md"> 
            <Header openModal={handleOpenTodo} sortFunc={handleSort} title={titleAct} updateFunc={handleUpdate}/>
            <Todos todoID={params.todoID} openFunc={handleOpenAlert} sortOpt={sorting}/>
            <TodoModal open={openTodo} handle={handleOpenTodo}/>
            <AlertModal open={openAlert} handle={handleOpenAlert} type="List Item" title={dataTodo ? dataTodo.title : ''} alertHandle={deleteTodo}/>
        </Container>
    )
}

export default TodoPage