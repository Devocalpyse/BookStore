import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './book.svg'

export default function Navi() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>
          <img src={logo} alt="Book store logo" />{' '}
          Voss Books
        </Navbar.Brand>
        <Nav>
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/books' className='nav-link'>Books</Link>
          <Link to='/about' className='nav-link'>About the Author</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}