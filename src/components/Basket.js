import React from 'react'
import styled from 'styled-components'
import { CartContext } from '../Context/CartContext'


const Basket = () => {

  const RenderCart = () => { 
    const cartItems = getItems();

    if (cartItems.length > 0){
      return cartItems.map((p) =>(
        <div>{p.title}</div>
      ))
    }
    else{
      return <div>The Basket Is currently empty</div>
    }
  }

  return (
    <>
    <div>

    </div>
    </>
  )
}

export default Basket