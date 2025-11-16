import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEnvelope, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'350px', backgroundColor:'teal'}} className='d-flex justify-content-center align-items-center flex-column text-white'>
        <div className="d-flex justify-content-evenly  w-100">
          <div style={{width:'400px'}} className="intro">
            <h3>
              <FontAwesomeIcon icon={faTruckFast}/> Daily Cart
            </h3>
            <p>Designed and built with all the love in the world by Anna Saji Mathew with the help of Luminar team</p>
            <p>Code Licensed Anna, docs CC BY 3.0.</p>
            <p>Currently v5.3.2</p>
          </div>
            
              <div className="links d-flex  flex-column">
                <h3>Links</h3>
                <Link to={'/'} className='text-decoration-none text-white'>Home</Link>
                <Link to={'/wishlist'} className='text-decoration-none text-white'>Wishlist</Link>
                <Link to={'/cart'} className='text-decoration-none text-white'>Cart</Link>
              </div>
              <div className="links d-flex  flex-column">
                <h3>Guides</h3>
                <a href={'https://react-redux.js.org/'} className='text-decoration-none text-white'>React</a>
                <a href={'https://react-bootstrap.netlify.app/'} className='text-decoration-none text-white'>React Bootstrap</a>
                <a href={'https://react-redux.js.org/'} className='text-decoration-none text-white'>React Redux</a>
                <a href={'https://www.npmjs.com/package/react-router-dom'} className='text-decoration-none text-white'>React Router Dom</a>
              </div>
              <div>
                <div className="d-flex flex-column">
                  <h3>Contact Us</h3>
                 <div className='d-flex'>
                    <input className='form-control border bg-white rounded' placeholder='Email Here' type="text" />
                    <button className='btn '> <FontAwesomeIcon icon={faArrowRight} className='text-white'/> </button>
                 </div>
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-between "> 
                    <FontAwesomeIcon icon={faFacebookF}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faWhatsapp}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <FontAwesomeIcon icon={faPhone}/>

                  </div>
                </div>
              </div>
        </div>
        <p className='fw-bolder'>Copyright @ November 2025, Daily Cart. Built with React Redux</p>
    </div>
  )
}

export default Footer