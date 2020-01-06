import React, { Component } from 'react';
import {Navbar,Nav} from  'react-bootstrap';
import './header.scss';

class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='header'>
            <img alt='Sabka Bazaar' className='header_logo'/>
<Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/link">Link</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>            </div>
        )
    }
}
export default Header;