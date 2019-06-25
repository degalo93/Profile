import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

import Main from "./Main"; 




const App = () => (

    <Router>
         <div className="onboarding">
        <Navbar />
         <Main /> 
         </div>
     </Router>

);

export default App;
