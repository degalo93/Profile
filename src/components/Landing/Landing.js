import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

import { withRouter} from 'react-router-dom';

class Landing extends Component {

render (){

    return(
        <Jumbotron>
            <h1 style= {{textAlign:'center'}} >Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <ul className="social">
               <li><a href="#"><i className="fa fa-facebook"></i></a></li>
               <li><a href="#"><i class="fa fa-twitter"></i></a></li>
               <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
               <li><a href="#"><i class="fa fa-instagram"></i></a></li>
               <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
               <li><a href="#"><i class="fa fa-skype"></i></a></li>
            </ul>
        </Jumbotron>
        )
    }

}
export default withRouter(Landing);
