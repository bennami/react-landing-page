import React from "react";
import {useParams, useHistory} from "react-router-dom";

const Thanks = () =>{

    const history = useHistory();
    const {name} = useParams();

    console.log(history);
    return(
        <React.Fragment>
            <p>this is thanks</p>
            <p>thanks <strong>{name}!!</strong></p>
            <p>you joined <strong>{history.location.state}</strong></p>
        </React.Fragment>
    )
};

export default Thanks;