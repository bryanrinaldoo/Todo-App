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
import { getTodoList, deleteTodo, createTodo, updateTodo, updateActivity } from '../../actions/activityAction'

const TodoPage = () => {
    let params = useParams();
    const [openTodo, setOpenTodo] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [dataTodo, setdataTodo] = useState();
    const [dataEdit, setdataEdit] = useState();
    const [sorting, setSorting] = useState(1);
    const [titleAct, setTitleAct] = useState();
    const dispatch = useDispatch();

    const handleOpenTodo = () =>{
        setOpenTodo(!openTodo);
    }
    const handleOpenEditModal = () =>{
        setOpenEdit(!openEdit);
        console.log("INI DATA NYA : ", dataEdit);
    }
    const handleOpenEdit = (data) =>{
        setdataEdit(data);
        handleOpenEditModal()
    }
    const handleOpenAlert = (data) =>{
        setOpenAlert(!openAlert)
        setdataTodo(data)
    }
    const handleSort = (idSort) =>{
        setSorting(idSort)
    }
    const handleUpdate = (title) =>{
        setTitleAct(title)
    }
    const deleteTodoFunc = () =>{
        // TODO: bikin biar ga refresh
        dispatch(deleteTodo(dataTodo.id))
        setOpenAlert(!openAlert)
        refresh()
        refresh()
    }
    const createTodoFunc = (title, priority) =>{
        // TODO: bikin biar ga refresh
        handleOpenTodo()
        dispatch(createTodo({
            "activity_group_id": params.todoID,
            "title": title,
            "priority": priority
        }))
        refresh()
        refresh()
    }
    const createEditFunc = (id, title, priority) =>{
        // TODO: bikin biar ga refresh
        refresh()
        refresh()
        handleOpenEditModal()
        dispatch(updateTodo(id, {
            "title": title,
            "priority": priority
        }))
        console.log(id);
        console.log(title);
        console.log(priority);
    }
    const updateActivityFunc = (title) =>{
        refresh()
        refresh()
        dispatch(updateActivity(params.todoID, {
            "title": title,
        }))
        console.log(params.todoID);
        console.log(title);
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
            <Header openModal={handleOpenTodo} sortFunc={handleSort} title={titleAct} updateFunc={handleUpdate} editFunc={updateActivityFunc}/>
            <Todos openFunc={handleOpenAlert} updateFunc={refresh} editFunc={handleOpenEdit}/>
            <TodoModal open={openEdit} handle={handleOpenEditModal} handleCreate ={createEditFunc} updateData={dataEdit}/>
            <TodoModal open={openTodo} handle={handleOpenTodo} handleCreate ={createTodoFunc}/>
            <AlertModal open={openAlert} handle={handleOpenAlert} type="List Item" title={dataTodo ? dataTodo.title : ''} alertHandle={deleteTodoFunc}/>
        </Container>
    )
}

export default connect()(TodoPage);