import React, { useContext } from 'react'
import { prodConetxt } from '../Global/ProductContext'
import Banner from './Banner'
import { Cartcontext } from '../Global/CartContext'
import Footer from './Footer'
const Product = () => {
    const { products } = useContext(prodConetxt)
    const {dispatch} = useContext(Cartcontext)
    // console.log(data);  this line will print totalPrice ,quantity shopingcart rtc 
  

  return (
    <>
    
      <Banner/>
      <div className="products addmargin" style={{marginTop: '100px'}}>
        {products.map(product => (
            <div className="productcon" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   ${product.price}.00
               </div>
            </div>
             <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, product})}>
                 <button className="buyNow" >Buy Now</button>
             </div> 
               {product.status === 'new' ? <div className="new">New</div>: ''}
                {product.status === 'hot' ? <div className="hot">Hot</div>: ''}
            </div>
            </div>
        ))}
        
        
        </div>
        <Footer/>
    </>
  )
}

export default Product
