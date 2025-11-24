import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'



function Wishlist() {
   const userWishlist = useSelector(state=>state.wishlistReducer)
   const userCart = useSelector(state =>state.cartReducer)

   const dispatch =  useDispatch()

   const handleCart = (product)=>{
         const existingProduct = userCart?.find(item=>item.id==product.id)
         dispatch(addToCart(product))
         dispatch(removeWishlistItem(product.id))
         //alert
           Swal.fire({
             title: 'completed!',
             text: existingProduct?`Quantity of ${product.title} is Updated Successfully `:'Product Added to Your Cart',
             icon: 'success',
             confirmButtonText: 'ok'
           })
       }

  return (
    <>
      <Header/>
      <div className='container py-5'>
        {/* wishlist with conent */}
        { 
        userWishlist?.length>0?
          <div className=" row my-5">
            {
              userWishlist?.map(product=>(
                <div className="col-md-3 mb-2">
            {/* card b- react bootstrap*/}
            <Card className='shadow-none border'>
              <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title> {product?.title}</Card.Title>
                <div className="d-flex justify-content-evenly mt-5">
                  <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className="btn shadow-none border-0 text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                  <button onClick={()=>handleCart(product)} className="btn shadow-none border-0 text-success fs-4"><FontAwesomeIcon icon={faCartPlus}/></button>
                </div>
              </Card.Body>
            </Card>
            </div>
              ))
            }
         </div>
        :
        <div className='d-flex justify-content-center align-items-center flex-column' style={{height:'80vh'}}>
          <img className='w-25' src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="empty" />
          <h3> Your Wishlist is Empty</h3>
          <Link to={'/'} className='btn text-white' style={{backgroundColor:'teal'}}>Add More</Link>
        </div>
        }
      </div>
    </>
  )
}

export default Wishlist