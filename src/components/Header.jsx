import { faTruckFast, faHeart, faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'



function Header({insideHome}) {
 const userWishlist = useSelector(state=>state.wishlistReducer)
 const userCart = useSelector(state =>state.cartReducer)
 //console.log(userWishlist);
  const dispatch = useDispatch()
 
   
  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor:'teal'}} className='position-fixed w-100 position-fixed z-1'>
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'> <FontAwesomeIcon icon={faTruckFast}/> Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-center">

            {
              insideHome &&
              <Nav.Item> <input onChange={e=>dispatch(searchProduct(e.target.value ))} className="form-control  border P-2 bg-white rounded me-lg-2" placeholder='Search by Product Name' type="text" /></Nav.Item>
            }

            <Link to="/wishlist" className='nav-link text-light fw-bold'>
  <FontAwesomeIcon icon={faHeart} className='text-danger me-1' />
  WISHLIST <Badge pill bg='dark' className='ms-1'>{userWishlist?.length}</Badge>
</Link>

<Link to="/cart" className='nav-link text-light fw-bold'>
  <FontAwesomeIcon icon={faCartShopping} className='text-success me-1' />
  CART <Badge pill bg='dark' className='ms-1'>{userCart?.length}</Badge>
</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header