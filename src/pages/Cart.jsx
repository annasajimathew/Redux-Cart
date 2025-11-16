import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
Header

function Cart() {
  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="my-5">
        <h1 className='text-danger fw-bold'>Cart Summary</h1>
        <div className="row mt-4">
          <div className="col-md-8 border rounded p-4">
            <table className="table ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>title</td>
                  <td><img width={'50px'} height={'50px'} src="https://m.media-amazon.com/images/I/61HLmRuVZvL.jpg" alt="" /></td>
                  <td>
                    <div className="d-flex">
                      <button className="btn fs-3 fw-bold shadow-none border-0">-</button>
                      <input style={{width:'30px' ,height:'30px'}} type="text" className="form-control border mt-3 text-center" readOnly value={10} />
                      <button className="btn fs-3 fw-bold shadow-none border-0 ">+</button>
                      
                    </div>
                  </td>
                  <td>$ 200</td>
                  <td>
                    <button className="btn text-danger shadow-none border-0"><FontAwesomeIcon icon={faTrash} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-4">
              <h3 className='fw-bold'>Total Amount : <span className='text-danger'>$19.99</span></h3>
              <hr />
              <div className="d-grid mt-2">
                <button className="btn btn-success">CHECK OUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart