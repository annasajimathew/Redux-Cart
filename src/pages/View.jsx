import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
Header

function View() {
  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img height={'250px'} className='image-fluid' src="https://p.turbosquid.com/ts-thumb/r0/sUPlMV/SE/smalleyeshadowpalettewithmirrormb3dmodel001/jpg/1640119865/1920x1080/fit_q87/e1444bd17f6aa77cd142db074d15a1804cf20ce3/smalleyeshadowpalettewithmirrormb3dmodel001.jpg" alt="product-img" />
          <div className="d-flex justify-content-evenly mt-5">
            <button className="btn btn-primary">ADD TO WISHLIST</button>
            <button className="btn btn-success">ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>title</h1>
          <h3 className='text-danger'>$ price</h3>
          <h4>Brand : </h4>
          <h4>Category : </h4>
          <h4>Discription : </h4>

          <h3 className='my-3'>Client Reviews</h3>
          {/* duplicate div */}
          <div className="border rounded p-3 shadow">
            <p><span className='fw-bolder '>username:</span>message</p>
            <p>Rating : number <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View