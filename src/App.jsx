

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import PageNF from './pages/PageNF'
import Footer from './components/Footer';





function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/view' element={<View/>}></Route>
        <Route path='/*' element={<PageNF/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
