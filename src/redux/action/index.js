import { ActionTypes } from "../types";

export const addcart = (product)=>{
    return{
        type : ActionTypes.ADD_CART,
        payload : product,
    }
}

export const deletecart = (product) =>{
    return{
        type : ActionTypes.DELETE_CART,
        payload: product,
    }
} 

