import React, { createContext, useEffect, useReducer } from 'react';
import {products} from './products';
import ContextCart from './ContextCart';
import reducer from './Reducer';
export const CartContext= createContext();


const initialState={
  item:products,
  totalAmount:0,
  totalItem:0,
}
const Cart = () => {
    // const [item, setItem]= useState(products);
    const [state, dispatch]=useReducer(reducer, initialState);
    //Delete Individual Elements
    const removeItem=(id)=>{
return dispatch({
  type:"REMOVE_ITEM",
  payload: id,
})
    }
    const clearCart=()=>{
      return dispatch({
        type:"CLEAR_CART",
      })
    }

    //increment the item
    const increment=(id)=>{
      return dispatch({
        type:"INCREMENT",
        payload:id,
      })
    }
    //decrement the item
    const decrement=(id)=>{
      return dispatch({
        type:"DECREMENT",
        payload:id,
      })
    }
    useEffect(() => {
      dispatch({ type: "GET_TOTAL" });
      console.log("Awesome");
    }, [state.item]);
    return (
    <>
    <CartContext.Provider value={{...state, removeItem, clearCart, increment,decrement}}>
    <ContextCart/>
    </CartContext.Provider>
    </>
  )
}

export default Cart;
