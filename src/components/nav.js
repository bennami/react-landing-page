import React from "react";
import {Link} from "react-router-dom";

function Nav(props) {

    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>home</Link></li>
            </ul>
            <ul>
                <li><
                    Link to={'/projects'}>projects</Link>
                </li>
            </ul>
            <ul>
                <li>{props.contact}</li>
            </ul>

        </nav>

    )

}

export default Nav;