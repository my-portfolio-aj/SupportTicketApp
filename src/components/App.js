import React from 'react';
// import 'App.css';
import {Route} from "react-router-dom"
import LandingPageCustomer from "./LandingPageCustomer.js";
import LandingPageHelper from "./LandingPageHelper.js";
import Home from "./Home.js"
import CustomerRegistation from "./CustomerRegistration.js"
function App() {
  return (
    <div className="App">
             <Route exact path ='/' component={Home} /> 
             <Route path ="/landing-page-customer" component={LandingPageCustomer} />
             <Route path ="/landing-page-helper" component={LandingPageHelper} />
             <Route path ="/customer-registration" component={CustomerRegistation} />


    </div>
    
  );
}

export default App;
