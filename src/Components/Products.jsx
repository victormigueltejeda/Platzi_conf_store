import React, { useContext } from "react"
import Product from "./Product"
import "../styles/Components/Products.css"
import AppContext from "../context/AppContect"



const Products = () =>{
  const {state,addToCart} = useContext(AppContext)
  const {products} = state

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product handleAddToCart={handleAddToCart} key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}


export default Products