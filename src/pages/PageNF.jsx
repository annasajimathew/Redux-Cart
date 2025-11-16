import React from 'react'
import { Link } from 'react-router-dom'
Link

function PageNF() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <h1 className="fw-bolder">ERROR 404!</h1>
      <img width={'25%'} src="https://www.urban-concept.be/assets/images/404Error.gif" alt="page not found" />
      <h4>Look Like You're Lost</h4>
      <p>The page you are looking is not available</p>
      <Link to={'/'} className='btn btn-success'>Back To Home</Link>
    </div>
  )
}

export default PageNF