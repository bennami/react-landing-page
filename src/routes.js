import React from "react";
import {Switch, Route} from 'react-router-dom';
import Main from "./pages/main";
import Contact from "./pages/contact";
import Cv from "./components/cv";
import Projects from "./pages/projects";
import PageNotFound from "./pages/pageNotFound";

const Routes = () =>{
    return(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/react-portfolio" component={Main}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/cv" component={Cv}/>
        <Route exact path="/projects" component={Projects}/>
        <Route component={PageNotFound}/>
    </Switch>
)
};

export default Routes;
