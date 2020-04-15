import React from "react";
import {Switch, Route} from 'react-router-dom';



import Main from "./components/main";
import Contact from "./components/contact";
import Thanks from "./components/thanks";

const Routes = () =>{
    return(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/thanks/:name" component={Thanks}/>


    </Switch>

)
};

export default Routes;