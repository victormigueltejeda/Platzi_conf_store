import React,{useContext}from 'react'
import AppContect from "../context/AppContect"
import "../styles/Components/Success.css"
import {MapContainer,Marker,Popup,TileLayer} from "react-leaflet" 


const Success = () =>{
  const {state} = useContext(AppContect)
  const buyer = state


  return(
    <div className='Success'>
      <div className='Success-content'> 
        <h2>{`${buyer.name} Gracia por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className='Success-map'>
        <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
          </Marker>
        </MapContainer>
         
        </div>
      </div>
    </div>
  )
}


export default Success