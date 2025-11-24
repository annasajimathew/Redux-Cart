import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

function Home() {

  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  //console.log(allProducts);

  const [currentPage, setCurrentPge] = useState(1)
  const productsPerPage = 8
  const totalPage = Math.ceil(allProducts.length/productsPerPage)
  
  //to see only 8 items in 1 page. so there is 30 items in total, so created 4 pages (32 items)
  const pageItemLastIndex = currentPage * productsPerPage //(1x8 2x8 3x8 4x8)
  const pageItemstartIndex = pageItemLastIndex - productsPerPage //(8-8 16-8 24-8 32-4)
  const visibleProductArray = allProducts?.slice(pageItemstartIndex,pageItemLastIndex)

  //forward and backward button
  const navigateNextPage = ()=>{
    if(currentPage!=totalPage)
      setCurrentPge(currentPage+1)
  }
  const navigatePreviousPage = ()=>{
    if(currentPage!=1)
      setCurrentPge(currentPage-1)
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <>
      <Header insideHome={true}/>
      <div className='container py-5'>
        {
          loading?
          <div className="text-center my-5 fw-bolder fs-5" >
            <img width="30%" className='me-2' src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="loading" />
            Loading...
          </div>

          :
          <div className="row my-5">
            {/* duplicate */}
            {
              allProducts?.length>0?
              visibleProductArray?.map(product=>(
                <div key={product?.id} className="col-md-3 mb-2">
                  {/* card -react bootstrap */}
                  <Card className='shadow-none border'>
                    <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                    <Card.Body className='text-center'>
                      <Card.Title> {product?.title}</Card.Title>
                      <Card.Text>
                        <Link to={`/products/${product?.id}/view`} className='btn text-light p-2' style={{backgroundColor:'teal'}}>
                          View More..
                        </Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))
              :
              <p className='fs-5 fw-bold my-5'> product not found</p>
            }

        {/* pagenation */}
        <div className="my-3 text-center">
          <button onClick={navigatePreviousPage} className='btn shadow-none border-0'><FontAwesomeIcon icon={faBackward}/></button>
          <span className="fw-bolder">{currentPage} of {totalPage}</span>
          <button onClick={navigateNextPage} className='btn shadow-none border-0'><FontAwesomeIcon icon={faForward}/></button>
        </div>
        </div>
        }
      </div>
    </>
  )
}

export default Home
