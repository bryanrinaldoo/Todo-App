import React , {useEffect, useState} from 'react'
import { CircularProgress } from '@material-ui/core';
import Axios from '../../../services/Axios'
import ActivityCard from './ActivityCard';
import ActivityNull from './ActivityNull';

const Activities = (props) => {
  const {openFunc} = props
  const [Activities, setActivities] = useState();

  useEffect(() => {
    Axios.get('activity-groups?email=bryanrinaldo')
    .then((res) => {
      const dataActivities = res.data.data;
      setActivities(dataActivities)
    })
    .catch((error) =>{
      console.log(error);
    })
  }, [])

console.log(Activities);
  return (
    <>
      {Activities ? (
        Activities.length > 0 ?
          (<div className='activities'>
            {Activities.map(activity => (
              <ActivityCard activity={activity} openModal={openFunc}/>
            ))}
          </div>)
          : <ActivityNull/>
      )
      : <CircularProgress/>}
    </>
  )
}

export default Activities