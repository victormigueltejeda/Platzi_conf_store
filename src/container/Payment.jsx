import React, {useContext} from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { useNavigate } from 'react-router-dom'
import Appcontect from "../context/AppContect"
import "../styles/Components/Payment.css"



const Payment = () =>{
  const {state, addNewOrder} = useContext(Appcontect)
  const {cart} =  state
  const navigate = useNavigate()

  const paypalOptiones = {
    clientId:"ABSzkCwy7ZhObpff7UjOnn3jz6G5AjGc9e-hQDcD4xStZLenjdfU2klh",
    intent:"capture",
    currency:"DO"
  }

  const buttonStyles = {
    layout:"vertical",
    shape:"rect"
  }

  const handlePaymentSuccess = (data) => {
    if(data.status === "COMPLETED"){
      const newOrder = {
        buyer,
        product:cart,
        payment:data
      }

      addNewOrder(newOrder)
      navigate("/checkout/success")
    }
  }

  const handleSumTotal = () =>{
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price
    const sum = cart.reduce(reducer,0)
    return sum
  }


  return(
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resument del pedido</h3>
        {cart.map(item => (
          <div className='Payment-item' key={item.title}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span> $ {} {item.price}</span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
          <PayPalButton paypalOptiones={paypalOptiones} buttonStyles={buttonStyles} amount={handleSumTotal} onPaymentStart={() => console.log("Start Payment")} onPaymentSuccess={data => handlePaymentSuccess(data)} onPaymentError={error => console.log(error)} onPaymentCancel={data => console.log(data)} />
        </div>
      </div>
    </div>
  )
}


export default Payment