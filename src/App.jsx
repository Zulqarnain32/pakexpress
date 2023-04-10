import React from 'react'
import Navbar from './components/Navbar'
import ProductContext from './Global/ProductContext'
import Product from './components/Product'
import Cart from './components/Cart'
import CartContextComponent from './Global/CartContext'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NotFound from './components/NotFound'
import "./App.css"
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <ProductContext>
      <CartContextComponent>
      <BrowserRouter>
       <Navbar/>
         <Routes>
           <Route exact path='/' element = {<Product/>}/>
           <Route exact path='/cart' element = {<Cart/>}/>
           <Route  path='*' element = {<NotFound/>}/>
         </Routes>     
      </BrowserRouter>
      </CartContextComponent>
    </ProductContext>
    {/* <Footer/> */}
  
    </>
  )
}

export default App
