import React from "react";
import {Switch, Route} from 'react-router-dom';
import Main from "./pages/main";
import Contact from "./pages/contact";
import Cv from "./components/cv/cv";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/pageNotFound";
import Lab from "./pages/Lab"

const Routes = () =>{
    return(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/react-portfolio" component={Main}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/lab" component={Lab}/>
        <Route exact path="/projects" component={Projects}/>
        <Route component={PageNotFound}/>
    </Switch>
)
};

export default Routes;
