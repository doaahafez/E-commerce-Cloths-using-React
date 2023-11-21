import React, { useContext } from 'react'
import { FaBeer } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import { productsContext } from './contexts/Products';

export default function MyNav() {
  const{cartCount}=useContext(productsContext)
  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/">
            <FaBeer /> React-Bootstrap
            </Navbar.Brand>
           
            {cartCount}
            <Nav className="ms-auto">
              <NavLink to="/" className='nav-link'>Home</NavLink>
              <NavLink to="/add" className='nav-link'>Add Student</NavLink>
              <NavLink to="/store" className='nav-link'>Store</NavLink>
            </Nav>

        </Container>
      </Navbar>
    </>
  )
}