import React, {useState} from "react";
import {Link} from "react-router-dom";

function Nav(props) {

    const [navClass, setClass] = useState(true);
    const [burgerClass, setBurgerClass] = useState(true);

    const navSlide =() => {
        const burger = document.querySelector(".burger");
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {


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
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;


                }

            });

        });

    };




    return(
        <nav>
            <h3>BENNAMI</h3>
            <ul className={navClass ? 'nav-links': 'nav-links nav-active'}>
                {props.homepage}
                <li><Link to={'/projects'}>projects</Link></li>
                {props.contact}
            </ul>
            <div className={burgerClass ? 'burger' : 'burger toggle'} onClick={navSlide}>
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
        </nav>

    )

}

export default Nav;