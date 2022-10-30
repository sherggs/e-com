export const CartReducer = (state, action) => {
    debugger;


    let index = -1
    if (action.payload){
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    }

    let cartItems = [...state.cartItems]
switch(action.type){
    case "ADD":
    case "INCQTY":

        if(index === -1){
            state.cartItems.push({...action.payload, quantity: 1})
        }
        else{
            state.cartItems[index].quantity++;
        }
        break;
    case "REMOVE":
        if(index > -1){
            state.cartItems.splice(index, 1);
        }
        break;
    case "DECQTY":
        if(index > -1){
            state.cartItems[index].quantity--;
        }
        break;
    case "CLEAR":
        if(index > -1){
            state.cartItems = [];
        }
        break;


    default:
}
return state;


}