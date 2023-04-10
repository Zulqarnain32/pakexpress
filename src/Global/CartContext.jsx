import React, { createContext, useReducer } from 'react'
import { CartReducer } from '../Global/CartReducer'
export const Cartcontext = createContext()
const CartContextComponent = (props) => {
    const [cart,dispatch] = useReducer(CartReducer,{shoppingCart:[],totalPrice:0,quantity:0})
  return (
    <>
      <Cartcontext.Provider value={{...cart,dispatch}}>
        {props.children}
      </Cartcontext.Provider>
    </>
  )
}

export default CartContextComponent

