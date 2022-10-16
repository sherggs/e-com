import React, { createContext } from "react";

export const CartContext = createContext();

const InitalState = { cartItems: []}

const CartContextProvider = () => {
    return (
        <CartContext.Provider value={InitalState}> 
        </CartContext.Provider>
    )
}
export default CartContextProvider