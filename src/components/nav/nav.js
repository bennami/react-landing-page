import React, {useState} from "react";
import {Link,} from "react-router-dom";
import "./nav.scss"

function Nav(props) {

    const [path] = useState(window.location.pathname);


    let _homepage;
    let _projects;


    console.log(window.location.pathname)

    //remove contact and home link if you are on contact page or vice versa
    if(path !== "/"){
        _homepage = (<li><Link to ="/">Home</Link></li>)
    }
    if(path !=="/projects"){
        _projects = (<li><Link to={'/projects'}>Projects</Link></li>)
    }

    const [navClass, setClass] = useState(true);
    const [burgerClass, setBurgerClass] = useState(true);

    const navSlide =() => {
        const navLinks = document.querySelectorAll('.nav-links li');
         //open close nav on mobile
            if(!navClass){
               setClass(true);
               setBurgerClass(true);
            }else{
               setClass(false);
               setBurgerClass(false);
            }

            //animate links
            navLinks.forEach((link,index) =>{
                if(link.style.animation){
                    link.style.animation ='';
                }else {
                    link.style.animation = `navLinkFade 0.3s ease forwards ${index / 5 + 0.2}s`;
                }
            });

    };


    return(
        <nav>
            <h3><Link to ="/">BENNAMI</Link></h3>
            <ul className= {"nav-desktop"}>
               {/* <li><a href="#about">About</a></li>*/}
                {_projects}
                {_homepage}
            </ul >
            <div onClick={navSlide} className={burgerClass ? 'burger' : 'burger toggle'} >
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
            <ul className= {navClass ? 'nav-links-mobile': 'nav-links-mobile nav-active-mobile'}>
               {/* <li><a href="#about">About</a></li>*/}
                {_projects}
                {_homepage}
            </ul >
        </nav>

    )

}

export default Nav;
