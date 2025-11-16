import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'


function Wishlist() {
  return (
    <>
      <Header/>
      <div className='container py-5'>
        {/* wishlist with conent */}
        <div className=" row my-5">
          <div className="col-md-3 mb-2">
          {/* card b- react bootstrap*/}
          <Card className='shadow-none border'>
            <Card.Img height={'250px'} variant="top" src="https://m.media-amazon.com/images/I/61HLmRuVZvL.jpg" />
            <Card.Body className='text-center'>
              <Card.Title> Title</Card.Title>
              <div className="d-flex justify-content-evenly mt-5">
                <button className="btn shadow-none border-0 text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                <button className="btn shadow-none border-0 text-success fs-4"><FontAwesomeIcon icon={faCartPlus}/></button>
              </div>
            </Card.Body>
          </Card>

        </div>

        </div>
      </div>
    </>
  )
}

export default Wishlist