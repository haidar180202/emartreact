import { ActionTypes } from "../types";

const cart = [];
export const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case ActionTypes.ADD_CART:
           const exist = state.find((x) => x.id === product.id);

           if(exist){
            console.log(state);
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
           

        case ActionTypes.DELETE_CART:
           const finddata = state.find((x)=> x.id === product.id);
           if(finddata.qty === 1){
            state.filter((x)=>x.id !== finddata.id);
           }
           else{
            return state.map((x)=> x.id === finddata.id ? {...x,qty:x.qty-1} : x)
           }
            
        default:
            return state;
            break;
    }
}