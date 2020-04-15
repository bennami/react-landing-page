import React, {useEffect, useState} from 'react';
import Routes from "./routes";
import {Link, useHistory} from "react-router-dom"

import './main.css';

function App() {
  const history = useHistory();

  const [path,setPath] = useState("");

  window.addEventListener("Load", ()=>{

    if(window.location.pathname === '/contact'){

      setPath(window.location.pathname)
    }

  });

  const checkPath = () => {
    history.listen((location) =>{
      setPath(location.pathname)

    })
  };

  useEffect( ()=>{
    checkPath()
  }, []);


  //remove contact link if you are on contact page
  const showContact = path;
  let _contact;
  if(showContact !== "/contact"){
    _contact = (<li><Link to ="/contact">Contact</Link></li>)
  }

  return (
    <div className="App">
     <div className="container">
       <nav>
         <ul>
           <li>
             <Link to='/'>home</Link></li>
         </ul>
         <ul>
           <li>{_contact}</li>
         </ul>
       </nav>
       <Routes/>

     </div>
    </div>
  );
}

export default App;
