import React from 'react'
import Button from '../../addBtn/Button'
import '../index.css'
const Header = () => {
  const createActivity = () =>{
    // TODO: masuk API 
    console.log("create Activity");
  }
  return (
    <div className="header">
      <h1 data-cy="activity-title" className='header-title'>Activity</h1>
      <Button data-cy="activity-add-button" buttonHandler={createActivity} label="Tambah"/>
    </div>
  )
}

export default Header