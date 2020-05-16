import React from "react";
import work1 from '../img/alice.jpg'
import work2 from '../img/posterarabista.jpg'
import work3 from '../img/work3.png'
import work4 from '../img/work4.png'
import work5 from '../img/work5.gif'
import work6 from '../img/work6.gif'
import work7 from '../img/work7.png'
import work8 from '../img/work8.png'
import work9 from '../img/work8.jpg'
import work10 from '../img/work10.png'
import work11 from '../img/work11.png'
import Nav from "../components/nav";
import "../Assets/css/projects.scss"


function Projects() {
    return(
        <>

        <Nav/>
        <div className={'projects-bg'}>

            <section className={"gallery"}>
                <img src={work11} alt=""/>
                <img src={work1} alt="alice in wonderland screenprint"/>
                <img src={work2} alt="poster arabista"/>
                <img src={work4} alt="t "/>
                <img src={work6} alt="RM gif"/>
                <img src={work3} alt="y"/>
                <img src={work5} alt="g"/>
                <img src={work7} alt="c"/>
                <img src={work8} alt="t"/>
                <img src={work9} alt="b"/>
                <img src={work10} alt="b"/>


            </section>
        </div>

        </>
    )

};

export default Projects;
