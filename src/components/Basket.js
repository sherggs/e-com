import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext } from '../Context/CartContext'


const Basket = () => {
  const [cartItems, setCartItems] = useState([]);
  const Navigate = useNavigate();
  const {getItems, addProduct, removeProduct, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  useEffect(() => {
    setCartItems(getItems())
  }, [getItems])
  

  const renderTotal = () => {

    const Total = cartItems.reduce((Total, item) => (Total + item.price * item.quantity), 0);
    return Total
  }


  const RenderCart = () => { 

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
    <div>{RenderCart()} </div>
    <button>the total is &pound;{renderTotal()}</button>
    <button onClick={() => setCartItems(clearCart())}>Clear</button>
    <button onClick={() => Navigate("/checkout")}>goto Checkout </button>
    </div>
    </>
  )
}

styled.div`

`

export default Basket