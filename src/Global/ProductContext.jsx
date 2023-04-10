import React, { createContext, useState } from 'react'
import dslr from "../assets/dslr.jpg"
import headphones from "../assets/headphones.jpg"
import iphone from "../assets/iphone.jpg"
import microphone from "../assets/microphone.jpg"
import perfume from"../assets/perfume.jpg"
import rings from "../assets/rings.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/watch.jpg"

export const prodConetxt = createContext()

const ProductContext = (props) => {
    const [products] = useState([
        {id:1, name: "Dslr", price:100,image:dslr, status:"hot"},
        {id:2, name: "Head Phone", price:200,image:headphones, status:"new"},
        {id:3, name: "Iphone", price:2000,image:iphone, status:"hot"},
        {id:4, name: "Microphone", price:40,image:microphone, status:"hot"},
        {id:5, name: "Perfume", price:20,image:perfume, status:"new"},
        {id:6, name: "Rings", price:10,image:rings, status:"hot"},
        {id:7, name: "Shoes", price:230,image:shoes, status:"hot"},
        {id:8, name: "Watch", price:400,image:watch, status:"new"},
    ])
  return (
    <>
       <prodConetxt.Provider value={{products:[...products]}}>
         {props.children}
       </prodConetxt.Provider>
    </>
  )
}

export default ProductContext
