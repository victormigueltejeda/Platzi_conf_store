import React from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";



import Home from "../container/Home"
import Checkout from "../container/Checkout"
import Information from "../container/Information"
import Payment from "../container/Payment"
import Success from "../container/Success"
import NotFound from "../container/NotFound"
import Layout from "../Components/Layout"
import AppContext from "../context/AppContect";
import useIntialState from "../hooks/useInitialState";


const App =() =>{
  const initialState = useIntialState()
  return(
    <AppContext.Provider value={initialState}>
      <Router>
        <Routes>
          <Route path="" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/checkout/information" element={<Information/>}/>
            <Route path="/checkout/payment" element={<Payment/>}/>
            <Route path="/checkout/success" element={<Success/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App