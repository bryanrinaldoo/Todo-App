import React from 'react'
import Todos from './todoContent/Todos'
import {useParams } from "react-router-dom";
import Header from './todoHeader/Header';
import Container from '@material-ui/core/Container';
import ModalMUI from './todoModal/TodoModal';

const TodoPage = () => {
    let params = useParams();
    return (
        <Container maxWidth="md">
            <Header/>
            <Todos todoID={params.todoID}/>
            <ModalMUI/>
        </Container>
    )
}

export default TodoPage