import React from 'react'
import './Button.css'

const Button = (props) => {
  const {buttonHandler, label, datacy} = props;
  return (
    <div className="btn" data-cy={datacy} onClick={buttonHandler}>
      <span className="icon-plus"></span> 
      <div className="titleBtn">{label}</div>
    </div>
  )
}

export default Button