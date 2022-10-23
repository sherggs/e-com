import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

const InitalState = { cartItems: []}

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, InitalState) 

    const addProduct = payload => {
        dispatch({type: "ADD", payload})
    }
    const removeProduct = payload => {
        dispatch({type: "REMOVE", payload})
    }
    const clearCart = () => {
        dispatch({type: "CLEAR", payload: undefined })
    }
    const increaseQuantity = payload => {
        dispatch({type: "INCQTY", payload})
    }
    const decreaseQuantity = payload => {
        dispatch({type: "DECQTY", payload})
    }

    const getItems = () =>{
        return state.cartItems;
    }

    const contextValueItems = {
        addProduct,
        removeProduct,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        getItems,
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