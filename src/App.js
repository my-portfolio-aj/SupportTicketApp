import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import LandingPageCustomer from "./components/LandingPageCustomer.js";
import LandingPageHelper from "./components/LandingPageHelper.js";
import Home from "./components/Home.js"
import CustomerRegistation from "./components/CustomerRegistration.js"
import Header from "./components/Header.js"
import LoginCustomer from "./components/LoginCustomer.js"
import LoginHelper from "./components/LoginHelper"
import HelperRegistration from "./components/HelperRegistration"
import Registration from "./components/Registration"
import CreateTicket from "./components/CreateTicket"
function App() {
  return (
    
    <div className="App">
      <Header />
      {/* Login&Registration */}
             <Route exact path ='/' component={Home} /> 
             <Route path ="/landing-page-customer" component={LandingPageCustomer} />
             <Route path ="/landing-page-helper" component={LandingPageHelper} />
             <Route path ="/customer-registration" component={CustomerRegistation} />
             <Route path ="/login-customer" component={LoginCustomer} />
             <Route path ="/login-helper" component={LoginHelper} />
             <Route path ="/helper-registration" component={HelperRegistration} />
             <Route path ="/registration" component={Registration} />
      {/* Create Ticket */}
             <Route path ="/create-ticket" component={CreateTicket} />

    </div>
    
  );
}

export default App;
