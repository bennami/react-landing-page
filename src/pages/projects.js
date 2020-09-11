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
import Card from "../components/card/card";


function Projects() {
    const colors=['#ba426c','#ff8f57','#7a4060','#342f74', '#3e023e'];
    return(
        <>
        <div className={'projects-bg'}>

            <section className={"gallery"}>
                <img src={work11} alt=""/>
                <img src={work1} alt="alice in wonderland screenprint"/>
                <img src={work2} alt="poster arabista"/>
                <Card projectName={"Movie DB"}
                      projectDescription={"This website features a movie Api that lets you browse through a huge library of movies"}
                      projectLink={"https://bennami.github.io/Movie-browse/#/"}
                      GithubLink={"https://github.com/bennami/Movie-browse"}
                      bgColor={colors[0]}
                />
                <img src={work4} alt="t "/>
                <img src={work6} alt="RM gif"/>

                <img src={work3} alt="y"/>
                <img src={work5} alt="g"/>
                <Card projectName={"Simple portfolio"}
                      projectDescription={'simple responsive portfolio for Jason'}
                      projectLink={"https://bennami.github.io/portfolio-site-with-grid/"}
                      GithubLink={"https://bennami.github/portfolio-site-with-grid/"}
                      bgColor={colors[1]}
                />
                <img src={work7} alt="c"/>
                <Card projectName={"Workshop overview"}
                      projectLink={"https://bennami.github.io/workshop-react"}
                      GithubLink={"https://github.com/bennami/workshop-react"}
                      bgColor={colors[2]}
                      projectDescription={"Website created to serve as a guide during a workshop"}
                />
                <img src={work8} alt="t"/>
                <img src={work9} alt="b"/>
                <img src={work10} alt="b"/>
                <Card projectName={"Pomodoro"}
                      projectDescription={"A simple interface that provides a customizable pomodoro timer and to do list"}
                      bgColor={colors[4]}
                      projectLink={"https://bennami.github.io/pomodoro2"}
                      GithubLink={"https://github.com/bennami/pomodoro2"}
                />


            </section>
        </div>

        </>
    )

};

export default Projects;
