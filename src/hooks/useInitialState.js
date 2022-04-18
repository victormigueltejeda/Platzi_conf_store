import { useState } from "react";
import initialstate from "../initialstate";

const useIntialState = () =>{
  const [state,setState] = useState(initialstate)

  const addToCart = paylad => {
    setState({
      ...state,
      cart:[...state.cart,paylad]
    })
  }

  const removeFromCart = paylad => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== paylad.id)
    })
  }

  const addToBuyer = paylad =>{
    setState({...state, buyer:[...state.buyer,paylad]})
  }

  const addNewOrder = paylad =>{
    setState({
      ...state,
      orders:[...state.orders,paylad]
    })
  }

  return{
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
    addNewOrder
  }

};


export default useIntialState