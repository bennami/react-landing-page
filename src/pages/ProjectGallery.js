import React from "react";
import work1 from '../Assets/img/screenprint.jpg'
import work2 from '../Assets/img/shien print.jpg'
import work3 from '../Assets/img/work3.png'
import work5 from '../Assets/img/work5.gif'
import work6 from '../Assets/img/work6.gif'
import work7 from '../Assets/img/work7.png'
import work8 from '../Assets/img/work8.png'
import work9 from '../Assets/img/work8.jpg'
import work10 from '../Assets/img/work10.png'
import work11 from '../Assets/img/work11.png'
import wotcBanner from '../Assets/img/wotcLogo.png'
import movie from "../Assets/img/movie.jpg";
import typod from "../Assets/img/typod.png";
import typoe from "../Assets/img/typoe.png";
import tatjana from "../Assets/img/tatjana gif.gif"
import gif from "../Assets/img/OS-2019-gif-.gif"
import znaCards from "../Assets/img/gif cards.gif"
import girl from "../Assets/img/girllllll.gif"
import il from '../Assets/img/il (4).jpg'
import "../Assets/css/projects.scss"
import Card from "../components/card/card";


function ProjectGallery() {
    const colors=['#ba426c','#ff8f57','#7a4060','#342f74', '#3e023e'];
    return(
        <>
        <div className={'projects-bg'}>

            <div className={"gallery"}>
                <div className={"project"}>
                    <div className={"project-image"}>
                    <img src={work11} alt=""/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>
                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={tatjana} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <div className={"project"}>

                    <div className={"project-image"}>
                        <img src={typod} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <Card projectName={"Simple portfolio"}
                      projectDescription={'simple responsive portfolio for Jason'}
                      projectLink={"https://bennami.github.io/portfolio-site-with-grid/"}
                      GithubLink={"https://bennami.github/portfolio-site-with-grid/"}
                      bgColor={colors[1]}
                />


                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={work2} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={gif} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <div className={"project"}>
                    <a href="https://bennami.github.io/Movie-browse/#/" target={"_blank noopener noreferrer"}>
                    <div className={"project-image"}>
                        <img src={movie} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                    </a>
                </div>
                {/*<Card projectName={"Movie DB"}*/}
                {/*      projectDescription={"This website features a movie Api that lets you browse through a huge library of movies"}*/}
                {/*      projectLink={"https://bennami.github.io/Movie-browse/#/"}*/}
                {/*      GithubLink={"https://github.com/bennami/Movie-browse"}*/}
                {/*      bgImage={movie}*/}
                {/*/>*/}
                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={work6} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={work3} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <img src={work7} alt="c"/>
                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={wotcBanner} alt="alice in wonderland screenprint"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>
                <img src={work5} alt="g"/>

                <img src={il} alt="g"/>





                <Card projectName={"Workshop overview"}
                      projectLink={"https://bennami.github.io/workshop-react"}
                      GithubLink={"https://github.com/bennami/workshop-react"}
                      bgColor={colors[2]}
                      projectDescription={"Website created to serve as a guide during a workshop"}
                />
                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={girl} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>
                        <p></p>
                    </div>
                </div>
                <img src={work8} alt="t"/>
                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={znaCards} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>
                        <p></p>
                    </div>
                </div>
                <img src={work9} alt="b"/>
                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={typoe} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>
                        <p></p>
                    </div>
                </div>
                <div className={"project"}>
                    <div className={"project-image"}>
                        <img src={work1} alt="alice in wonderland screenprint"/>
                    </div>
                    <div className={"project-title"}>
                        <p> </p>
                    </div>
                </div>
                <img src={work10} alt="b"/>
                <Card projectName={"Pomodoro"}
                      projectDescription={"A simple interface that provides a customizable pomodoro timer and to do list"}
                      projectLink={"https://bennami.github.io/pomodoro2"}
                      GithubLink={"https://github.com/bennami/pomodoro2"}
                      bgColor={colors[3]}
                />


            </div>
        </div>

        </>
    )

};

export default ProjectGallery;
