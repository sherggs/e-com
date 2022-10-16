import React, { createContext } from "react";

export const CartContext = createContext();

const InitalState = { cartItems: []}

const CartContextProvider = ({children}) => {

    const addProduct = payload => {
        debugger;
    }

    const contextValueItems = {
        addProduct,
        ...InitalState
    }




    return (
        <CartContext.Provider value={contextValueItems}> 
        {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider