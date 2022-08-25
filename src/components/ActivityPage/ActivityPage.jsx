import React, { useState } from 'react'
import Activities from './activityContent/Activities'
import Header from './activityHeader/Header'
import Container from '@material-ui/core/Container'
import './index.css'
import AlertModal from '../modal/AlertModal'
import InfoModal from '../modal/InfoModal'

const ActivityPage = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [dataAct, setdataAct] = useState();
  const handleOpenAlert = (data) =>{
    setOpenAlert(!openAlert)
    setdataAct(data)
    console.log(dataAct);
  }
  const handleOpenInfo = () =>{
    setOpenInfo(!openInfo)
  }
  const deleteActivity = () =>{
    // TODO: manggil API 
    setOpenAlert(!openAlert)
    setOpenInfo(!openInfo)
    console.log(dataAct.id);
  }
  return (
    <Container maxWidth="md">
      <Header/>
      <Activities openFunc={handleOpenAlert}/>
      <AlertModal open={openAlert} handle={handleOpenAlert} type="activity" title={dataAct ? dataAct.title : ''} alertHandle={deleteActivity}/>
      <InfoModal open={openInfo} handle={handleOpenInfo}/>
    </Container>
  )
}

export default ActivityPage