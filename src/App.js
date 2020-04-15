import React, {useEffect, useState} from 'react';
import Routes from "./routes";
import {Link, useHistory} from "react-router-dom"
import './App.css';

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
      setPath(location.name)

    })
  };

  useEffect( ()=>{

    checkPath();
  }, []);

  const showContact = path;
  let _contact;
  if(showContact !== "/contact"){
    _contact = (<li><Link to ="/contact">Contact me</Link></li>)
  }

  return (
    <div className="App">
     <div className="container">
       <nav>
         <ul>
           <li>
             <Link to='/'>newReactrouter</Link></li>
         </ul>
         <ul>
           <li>{_contact}</li>
         </ul>
       </nav>

     </div>
    </div>
  );
}

export default App;
