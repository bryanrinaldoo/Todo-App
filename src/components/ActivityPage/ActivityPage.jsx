import React from 'react'
import Activities from './activityContent/Activities'
import Header from './activityHeader/Header'
import Container from '@material-ui/core/Container'

import './index.css'

const ActivityPage = () => {
  return (
    
    <Container maxWidth="md">
      <Header/>
      <Activities/>
    </Container>
  )
}

export default ActivityPage