import React from 'react'
import Button from '../../addBtn/Button'
import '../index.css'
const Header = (props) => {
  const {handleCreate} = props;
  return (
    <div className="header">
      <h1 data-cy="activity-title" className='header-title'>Activity</h1>
      <Button data-cy="activity-add-button" buttonHandler={handleCreate} label="Tambah"/>
    </div>
  )
}

export default Header