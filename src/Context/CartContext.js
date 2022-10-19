import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

const InitalState = { cartItems: []}

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, InitalState) 

    const addProduct = payload => {
        dispatch({type: "ADD", payload})
        debugger;
    }

    const contextValueItems = {
        addProduct,
        ...state
    }




    return (
        <CartContext.Provider value={contextValueItems}> 
        {children}
        <button onClick={() => addProduct()}></button>
        </CartContext.Provider>
    )
}
export default CartContextProvider