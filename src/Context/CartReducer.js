export const CartReducer = (state, action) => {
    debugger;


    let index = -1
    if (action.payload){
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    }

    let newItems = [...state.cartItems]
switch(action.type){
    case "ADD":
    case "INCQTY":

        if(index === -1){
            // state.cartItems.push({...action.payload, quantity: 1}) old array 
            newItems.push({...action.payload, quantity: 1}) //new array 
        }
        else{
            // state.cartItems[index].quantity++;
            newItems[index].quantity++;
        }
        break;
    case "REMOVE":
        if(index > -1){
            // state.cartItems.splice(index, 1);
            newItems = state.cartItems.filter(x => x.id !== action.payload.id)
        }
        break;
    case "DECQTY":
        if(index > -1){
            // state.cartItems[index].quantity--;
            newItems[index].quantity--;
        }
        break;
    case "CLEAR":
        if(index > -1){
            // state.cartItems = [];
            newItems = [];
        }
        break;


    default:
}
state.cartItems  = newItems;
return state;


}