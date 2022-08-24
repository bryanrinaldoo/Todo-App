import React from 'react'
import './Button.css'

const Button = (props) => {
  const {buttonHandler} = props;
  return (
    <div className="btn" data-cy="activity-add-button" onClick={buttonHandler}>
      <span className="icon-plus"></span> 
      <div className="titleBtn">Tambah</div>
    </div>
  )
}

export default Button