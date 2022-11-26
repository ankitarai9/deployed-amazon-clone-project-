import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

// import PriceStock from "./PriceStock";

 const promise = loadStripe('pk_test_51L1dw8SDq8lPbJKJtet29T2BbdBiQ8TGp6SXpb5sLggr7qO5vxVLRXpcmmCc8hPjt6O8EuVu1KzQjMBrxV65PpSS00GeZxtelp');


function App() {

const[{},dispatch]=useStateValue();
useEffect(() => {

  auth.onAuthStateChanged(authUser => {
  console.log('THE USER IS >>>',authUser);

  if(authUser){

dispatch({

type: 'SET_USER',
user: authUser


})
} 
  
  else{

    dispatch({
      type:'SET_USER',
      user:null
    })

  }
  
  })

}, [])



  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                {" "}
                <Header />
                <Orders />
              </>
            }
          ></Route>
          
          <Route path="/login" element={<Login />}></Route>
          {/* <Route element={<PriceStock></PriceStock>}></Route> */}

          <Route
            path="/checkout"
            element={
              <>
                {" "}
                <Header />
                <Checkout />
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                {" "}
                <Header />
                <Home />
                {/* <PriceStock></PriceStock> */}
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                {" "}
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;