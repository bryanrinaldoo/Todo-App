import React from 'react'
import { CircularProgress } from '@material-ui/core';
import ActivityCard from './ActivityCard';
import ActivityNull from './ActivityNull';
import { connect } from 'react-redux';


const  mapStateToProps = (state, props) => {
  const {openFunc} = props
  return{
    getActivitiesList: state.activities.getActivitiesList,
    openFunc
  }
}

const Activities = (props) => {
  return (
    <>
      {props.getActivitiesList ? (
        props.getActivitiesList.length > 0 ?
          (<div className='activities'>
            {props.getActivitiesList.map(activity => (
              <ActivityCard activity={activity} openModal={props.openFunc}/>
            ))}
          </div>)
          : <ActivityNull/>
      )
      : <CircularProgress/>}
    </>
  )
}

export default connect(mapStateToProps, null)(Activities);