import React from 'react'
import {useNavigate} from 'react-router-dom'

const ActivityCard = (props) => {
    const {activity} = props;
    const {id, title, created_at} = activity;
    let date = new Date(created_at)
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let month = months[date.getMonth()];
    let navigate = useNavigate();
    
    const deleteActivity = () =>{
        // TODO: masukin API 
        console.log("delete", id);
    }
    return(
      <div data-cy="activity-item" className='activityCard'>
        <div data-cy="activity-item-title" className='activityCard-title' onClick={()=>{navigate(`/todo/${id}`);}}>{title}</div>
        <div className="activityCard-bottom">
            <div data-cy="activity-item-date" className='activityCard-date'>{date.getDate()} {month} {date.getFullYear()}</div>
            <div data-cy="activity-item-delete-button" className="activityCard-trashBtn" onClick={deleteActivity}></div>
        </div>
      </div>
    ) 
}

export default ActivityCard