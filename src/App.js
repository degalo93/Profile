import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Callback from './Callback';





class App extends Component {
  constructor(props){
    super(props);
    
      this.state = {
        checksesh:true 
      }
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/callback' component={Callback}/>
        
      </div>
    );
  }
}


export default withRouter(App);