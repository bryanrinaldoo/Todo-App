import React, { useState, useEffect} from 'react'
import Activities from './activityContent/Activities'
import Header from './activityHeader/Header'
import Container from '@material-ui/core/Container'
import './index.css'
import AlertModal from '../modal/AlertModal'
import InfoModal from '../modal/InfoModal'
import {connect, useDispatch} from 'react-redux'
import { createActivity, deleteActivity, getActivitiesList } from '../../actions/activityAction'

const ActivityPage = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [dataAct, setdataAct] = useState();
  const dispatch = useDispatch();

  const handleOpenAlert = (data) =>{
    setOpenAlert(!openAlert)
    setdataAct(data)
  }
  const handleOpenInfo = () =>{
    setOpenInfo(!openInfo)
  }
  const deleteActivityFunc = () =>{
    // TODO: bikin biar ga refresh
    dispatch(deleteActivity(dataAct.id))
    setOpenAlert(!openAlert)
    setOpenInfo(!openInfo)
    refresh()
    refresh()
  }
  const createActFunc = () =>{
    // TODO: bikin biar ga refresh
    dispatch(createActivity())
    refresh()
    refresh()
  }
  const refresh = () =>{
    dispatch(getActivitiesList());
  }
  useEffect(() => {
    refresh()
  },[])
  return (
    <Container maxWidth="md">
      <Header handleCreate={createActFunc}/>
      <Activities openFunc={handleOpenAlert}/>
      <AlertModal open={openAlert} handle={handleOpenAlert} type="activity" title={dataAct ? dataAct.title : ''} alertHandle={deleteActivityFunc}/>
      <InfoModal open={openInfo} handle={handleOpenInfo} label="Activity"/>
    </Container>
  )
}

export default connect()(ActivityPage)