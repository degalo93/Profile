import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./pages/Hompage"; 
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";




const App = () => (
    <div>
    <Router>
        <div>
       <Navbar />
            <Switch>
                <Route path= "/" exact component = {Homepage} />
                <Route path="/projects" exact component = {Projects}/>
                <Route path="/contact" exact component = {Contact} />
                <Route path="/resume" exact compoent = {Resume} />

            </Switch>
            </div>  
    </Router>
    </div>
);

export default App;
