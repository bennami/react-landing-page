import React from "react";
import '../projects.css';
import work1 from '../img/alice.jpg'
import work2 from '../img/posterarabista.jpg'
import work3 from '../img/work3.png'
import work4 from '../img/work4.png'
import work5 from '../img/work5.gif'
import work6 from '../img/work6.gif'
import work7 from '../img/work7.png'
import work8 from '../img/work8.png'
import work9 from '../img/work8.jpg'


function Projects() {
    return(
        <div className={'projects-bg'}>
            <section className={"gallery"}>
                <img src={work1} alt="alice in wonderland screenprint"/>
                <img src={work2} alt="poster arabista"/>
                <img src={work4} alt=" "/>
                <img src={work6} alt="RM gif"/>
                <img src={work3}alt=""/>
                <img src={work5} alt=""/>
                <img src={work7} alt=""/>
                <img src={work8} alt=""/>
                <img src={work9} alt=""/>

            </section>
        </div>
    )

};

export default Projects;