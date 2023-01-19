import { ActionTypes } from "../types";

const cart = [];
export const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case ActionTypes.ADD_CART:
           const exist = state.find((x) => x.id === product.id);

           if(exist){
            return state.map((x)=> x.id === product.id ? {...x, qty :x.qty + 1} : x)
           }

           else {
            const product = action.payload
            return [
                ...state,{
                    ...product,
                    qty : 1,
                }
            ]
           }
           break;

        case ActionTypes.DELETE_CART:
              
        default:
            return state;
            break;
    }
}