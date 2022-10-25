import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext } from '../Context/CartContext'


const Basket = () => {
  const Navigate = useNavigate();
  const {getItems, addProduct, removeProduct, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

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