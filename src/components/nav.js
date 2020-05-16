import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "../Assets/css/nav.css"

function Nav(props) {

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
    }, [checkPath]);


    //remove contact and home link if you are on contact page
    const showContact = path;
    let _contact;
    let _homepage;
    let _projects;
    if(showContact !== "/contact"){
        _contact = (<li><Link to ="/contact">Contact</Link></li>)
    }
    if(showContact !=="/"){
        _homepage = (<li><Link to ="/">Home</Link></li>)
    }
    if(showContact !=="/projects"){
        _projects = (<li><Link to={'/projects'}>Projects</Link></li>)
    }




    const [navClass, setClass] = useState(true);
    const [burgerClass, setBurgerClass] = useState(true);

    const navSlide =() => {
        const burger = document.querySelector(".burger");
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
            <ul className={navClass ? 'nav-links': 'nav-links nav-active'}>
                <li><Link to={'#about'}>About</Link></li>
                {_projects}
                {_contact}
                {_homepage}
            </ul >
            <div onClick={navSlide} className={burgerClass ? 'burger' : 'burger toggle'} >
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
        </nav>

    )

}

export default Nav;
