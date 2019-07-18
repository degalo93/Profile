import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Homepage from "../components/Homepage"

const Main = props => {
    const { errors } = props
    return(
        <div className = "containerM">
            <Switch>
                <Route exact path="/" component = {Homepage} />
            </Switch>
        </div>
    );
};

export default withRouter (Main);