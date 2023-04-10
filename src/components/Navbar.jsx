import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Cartcontext } from '../Global/CartContext';
const Navbar = () => {
  const {quantity} = useContext(Cartcontext)
  return (
    <>
        <nav>
            <ul className='left'>
                <li ><Link to="/" className='logo'>PakExpress</Link> </li>
            </ul>
            <ul className='right'>
                <li>
                  <Link to = "/cart"
                   className='count' ><FaShoppingCart className='shopingcart'/> {quantity} 
                    
                      {/* <span className='shopingcart'>
                        <span className="cartcount">0</span>
                    </span> */}
                    
                  </Link> 
                  </li>
                
            </ul>
        </nav>
    </>
  )
}

export default Navbar
