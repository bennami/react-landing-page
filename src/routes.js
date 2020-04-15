import React from "react";
import {Switch, Route} from 'react-router-dom';



import Main from "./main";
import Contact from "./components/contact";
import Thanks from "./components/thanks";
import Cv from "./components/cv";

const Routes = () =>{
    return(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/thanks/:name" component={Thanks}/>
        <Route exact path="/cv" component={Cv}/>


    </Switch>

)
};

export default Routes;