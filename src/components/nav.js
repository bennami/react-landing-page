import React from "react";
import {Link} from "react-router-dom";

function Nav(props) {

    return(
        <nav>
            <h3>BENNAMI</h3>
            <ul>
               {props.homepage}
                <li><Link to={'/projects'}>projects</Link></li>
                {props.contact}
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>

    )

}

export default Nav;