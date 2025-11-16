import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <Header/>
    <div className='container py-5'>
      <div className="row my-5">
        {/* duplicate */}
        <div className="col-md-3 mb-2">
          {/* card b- react bootstrap*/}
          <Card className='shadow-none border'>
            <Card.Img height={'250px'}  variant="top" src="https://m.media-amazon.com/images/I/61HLmRuVZvL.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <Link to={'/products/id/view'} className='btn text-light p-2' style={{backgroundColor:'teal'}}>View More..</Link>
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
        
      </div>
    </div>
    
    </>
  )
}

export default Home