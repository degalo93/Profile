import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Homepage from "../components/Homepage"

const Main = props => {
    const { errors } = props
    return(
        <div className = "container">
            <Switch>
                <Route exact path="/home" component = {Homepage} />
            </Switch>
        </div>
    );
};

export default withRouter (Main);