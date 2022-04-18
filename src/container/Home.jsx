import React from 'react'
import initialstate from '../initialstate'
import Products from '../Components/Products'



const Home = () =>{
  return(
    <Products products={initialstate.products}></Products>
  )
}


export default Home