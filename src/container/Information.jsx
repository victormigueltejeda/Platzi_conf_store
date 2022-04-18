import React,{useRef,useContext} from 'react'
import "../styles/Components/Information.css"
import { Link,useNavigate } from 'react-router-dom'
import AppContect from "./../context/AppContect"



const Information= () =>{

  const {state, addToBuyer} = useContext(AppContect)
  const form = useRef(null)
  const {cart } = state
  const navigate = useNavigate()


  const handleSubmit = () => {

    const formData = new FormData(form.current)
    const buyer = {
      "name": formData.get("name"),
      "email": formData.get("email"),
      "address": formData.get("address"),
      "apto": formData.get("apto"),
      "city": formData.get("city"),
      "country": formData.get("country"),
      "state": formData.get("state"),
      "cp": formData.get("cp"),
      "phone":formData.get("phone"),
    }

    addToBuyer(buyer)
    navigate("/checkout/payment")

  }

  
  return(
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Information de caontacto:</h2>
        </div>
        <div className='Information-form'>
          <form ref={form} action='action'>
            <input type="text" placeholder='Nombre completo' name='name'/>
            <input type="text" placeholder='Correo Elecronico' name='email'/>
            <input type="text" placeholder='Direccion' name='address'/>
            <input type="text" placeholder='Apto' name='apto'/>
            <input type="text" placeholder='Ciudad' name='city'/>
            <input type="text" placeholder='Pais' name='country'/>
            <input type="text" placeholder='Codigo postal' name='cp'/>
            <input type="text" placeholder='Telefono' name='Phone'/>
          </form>
        </div>
        <div className='Information-buttons'>
          <div className='Information-back'>
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className='Information-next'> 
            <button onClick={() =>handleSubmit()}  type='button'>PAgar</button>
          </div>
        </div>
      </div>
      <div className='Informarion-sidebar'>
        <h3>Pedidos</h3>
        {cart.map(item =>(
          <div key={item.title} className='Informarion-element'>
            <h4>ITEM Name</h4>
            <span>$ {item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Information