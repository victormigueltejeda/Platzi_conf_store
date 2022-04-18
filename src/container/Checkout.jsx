import React,{useContext} from 'react'
import "../styles/Components/Checkout.css"
import { Link } from 'react-router-dom'
import AppContect from "./../context/AppContect"




const Checkout= () =>{
  const {state, removeFromCart} = useContext(AppContect)
  const {cart} = state


  const handleRemove = product =>{
    removeFromCart(product)
  }


  const handleSumTotal = () =>{
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price
    const sum = cart.reduce(reducer,0)
    return sum
  }



  return(
    <div className='Checkout'>
      <div className='Checkout-content'>
        <h3>{cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}</h3>
        {cart.map(item => (
          <div className='Checkout-item'>
            <div className='Checkout-element'>
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button onClick={() => handleRemove(item)} type='button'><i className='fas fa-trash-alt'/></button>
          </div>

        ))}
      </div>

      {cart.length > 0 && (
        <div className='Checkout-sidebar'>
          <h3>{`Precio Total $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type='button'>Continuar pedido</button>
          
          </Link>
        </div>

      ) }

    </div>
  )
}


export default Checkout