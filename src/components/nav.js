import React from "react";
import {Link} from "react-router-dom";

function Nav(props) {
    const navSlide =() => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            nav.classList.toggle("nav-active");

            //animate links
            navLinks.forEach((link,index) =>{
                if(link.style.animation){
                    link.style.animation ='';
                }else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
                    console.log(index / 7);
                }

            });


          /*  burger animation*/

            burger.classList.toggle('toggle');
        });

    };




    return(
        <nav>
            <h3>BENNAMI</h3>
            <ul className="nav-links">
                {props.homepage}
                <li><Link to={'/projects'}>projects</Link></li>
                {props.contact}
            </ul>
            <div className="burger" onClick={navSlide}>
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
        </nav>

    )

}

export default Nav;