import React,{useState} from "react";
import bg from "./../img/bg1.svg";
import {Link, useHistory} from "react-router-dom";
const Main = () =>{
    const [joined,setjoined] = useState("");
    const history = useHistory();


    return(
        <React.Fragment>
           <header>
               <img src= {bg} />
               <div>
                   <h1> We build &amp; design <br/> your web applications</h1>
                   <p>You have coome to the right place</p>
                   <Link to={"/contact"}>Get in touch </Link>
               </div>
           </header>
        </React.Fragment>
    )

};

export default Main;