import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

import { withRouter} from 'react-router-dom';

class Landing extends Component {

render (){

    return(
        <Jumbotron>
            <h1 style= {{textAlign:'center'}} >Hello, world!</h1>
        
            
        </Jumbotron>
        )
    }

}
export default withRouter(Landing);
