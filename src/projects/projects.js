import React from "react";
import arrow from '../Assets/img/arrow-black.svg'
import "./projects.css"



function Arte() {

    return(
        <>
            <section class="projects">
                <a href="#" class="project" style={{backgroundColor: "#8B89F9"}}>
                    <img src=""></img>
                    <a class="link">Arte <i><img src={arrow} alt=""/></i></a>
                </a>
                <a href="#" class="project" style={{backgroundColor: "#BEFFB9"}}>
                    <img src=""></img>
                    <a class="link">Typography <i><img src={arrow} alt=""/></i></a>

                </a>
                <a href="#" class="project" style={{backgroundColor: "#FFA57E"}}>
                    <img src=""></img>
                    <a class="link">Illustration<i><img src={arrow} alt=""/></i></a>
                </a>
            </section>
        </>
    )

};

export default Arte;
