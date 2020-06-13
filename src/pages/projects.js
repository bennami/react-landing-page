import React from "react";
import work1 from '../Assets/img/alice.jpg'
import work2 from '../Assets/img/posterarabista.jpg'
import work3 from '../Assets/img/work3.png'
import work4 from '../Assets/img/work4.png'
import work5 from '../Assets/img/work5.gif'
import work6 from '../Assets/img/work6.gif'
import work7 from '../Assets/img/work7.png'
import work8 from '../Assets/img/work8.png'
import work9 from '../Assets/img/work8.jpg'
import work10 from '../Assets/img/work10.png'
import work11 from '../Assets/img/work11.png'
import Nav from "../components/nav/nav";
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
