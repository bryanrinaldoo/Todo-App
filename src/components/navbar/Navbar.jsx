import React from 'react'
import './Navbar.css'
import Container from '@material-ui/core/Container'

const Navbar = () => {
  return (
    <div data-cy="header-background" className="navbar">
      <Container maxWidth="md">
        <div data-cy="header-title" className="title">TO DO LIST APP</div>
      </Container>
    </div>
  )
}

export default Navbar