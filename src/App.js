import React, {useEffect, useState} from 'react';
import Routes from "./routes";
import {Link, useHistory} from "react-router-dom"

import './main.css';
import Nav from "./components/nav";

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


  //remove contact and home link if you are on contact page
  const showContact = path;
  let _contact;
  let _homepage;
  let _projects;
  if(showContact !== "/contact"){
    _contact = (<li><Link to ="/contact">contact</Link></li>)
  }
  if(showContact !=="/"){
    _homepage = (<li><Link to ="/">home</Link></li>)
  }
  if(showContact !=="/projects"){
    _projects = (<li><Link to={'/projects'}>projects</Link></li>)
  }




  return (
    <div className="App">
      <Nav
          contact ={_contact}
          homepage={_homepage}
          projects ={_projects}
      />
      <div className="container">
     <Routes/>
     </div>
    </div>
  );
}

export default App;
