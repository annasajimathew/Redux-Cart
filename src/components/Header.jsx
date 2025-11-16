import { faTruckFast, faHeart, faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
Badge

function Header() {
  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor:'teal'}} className='position-fixed w-100'>
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'> <FontAwesomeIcon icon={faTruckFast}/> Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-center">
            <Nav.Link><Link to={'/wishlist'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faHeart} className='text-danger me-1' />WHISHLIST <Badge pill bg='dark' className='ms-1'>9</Badge></Link></Nav.Link>
            <Nav.Link><Link to={'/cart'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faCartShopping} className='text-success me-1' />CART <Badge pill bg='dark' className='ms-1'>20</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header