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
import Soup from "../Assets/img/soup.png"
import pomodoro from "../Assets/img/pomodoro.png"
import react from "../Assets/img/react.gif"
import Card from "../components/card/card";
import Masonry from "masonry-layout"


function ProjectGallery() {
    const colors=['#ba426c','#ff8f57','#231924','#342f74', '#3e023e'];

    return(
        <>
        <div className={'projects-bg'}>

            <div className={"gallery"}>
                <div className={"project two-rows"}>
                    <div className={"project-image"}>
                    <img src={work11} alt="mvc-model"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>
                <div className={"project two-rows"}>
                    <div className={"project-image"}>
                        <img src={tatjana} alt="tatjana"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <div className={"project two-rows"}>

                    <div className={"project-image"}>
                        <img src={typod} alt="d-typo"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <Card extraClass={"three-rows"}
                      projectName={"Soupsip workshop"}
                      projectDescription={'Website made as part of an educational workshop. Locally made soups to warm your heart'}
                      projectLink={"https://soupsip.netlify.app/"}
                      GithubLink={"https://github.com/bennami/soupsip-empty"}
                      bgColor={colors[1]}
                      image={Soup}
                />


                <div className={"project three-rows"}>
                    <div className={"project-image"}>
                        <img src={work2} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <div className={"project two-rows"}>
                    <div className={"project-image"}>
                        <img src={gif} alt="2019"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <Card
                    extraClass={"three-rows"}
                    projectName={"Movie DB"}
                      projectDescription={'This website features a movie Api that lets you browse through a huge library of movies'}
                      projectLink={"https://bennami.github.io/Movie-browse/#/"}
                      GithubLink={"https://github.com/bennami/Movie-browse"}
                      bgColor={colors[3]}
                      image={movie}
                />

                <div className={"project two-rows"}>
                    <div className={"project-image"}>
                        <img src={work6} alt="rhythmic mobility"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <div className={"project two-rows"}>
                    <div className={"project-image"}>
                        <img src={work3} alt="n-typo"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <img className={"three-rows"} src={work7} alt="burger-man"/>

                <div className={"project two-rows"}>
                    <div className={"project-image  "}>
                        <img src={wotcBanner} alt="wotc"/>
                    </div>
                    <div className={"project-title"}>

                    </div>
                </div>

                <img className={"two-rows"} src={work5} alt="bouncing ball"/>

                <img  className={"two-rows"}  src={il} alt="moviescreens"/>


                <Card
                extraClass={"three-rows"}
                    projectName={"React hooks"}
                      projectLink={"https://bennami.github.io/workshop-react"}
                      GithubLink={"https://github.com/bennami/workshop-react"}
                      bgColor={colors[2]}
                      projectDescription={"Website created to serve as a guide during a workshop"}
                image={react}
                />
                <div className={"project  two-rows"}>
                    <div className={"project-image"}>
                        <img src={girl} alt="gif-girl"/>
                    </div>
                </div>
                <img className={"three-rows"} src={work8} alt="take a look into the future"/>

                <div className={"project three-rows"}>
                    <div className={"project-image"}>
                        <img src={znaCards} alt="poster arabista"/>
                    </div>
                    <div className={"project-title"}>
                        <p></p>
                    </div>
                </div>
                <img className={"three-rows"} src={work9} alt="stay-healthy"/>
                <div className={"project two-rows"}>
                    <div className={"project-image "}>
                        <img src={typoe} alt="e-typo"/>
                    </div>
                    <div className={"project-title"}>
                        <p></p>
                    </div>
                </div>

                <div className={"project three-rows"}>
                    <div className={"project-image "}>
                        <img src={work1} alt="alice in wonderland screenprint"/>
                    </div>
                    <div className={"project-title"}>
                        <p> </p>
                    </div>
                </div>

                <img className={"two-rows"} src={work10} alt="what "/>

                <Card extraClass={"three-rows"}
                    projectName={"Pomodoro"}
                      projectDescription={"A simple interface that provides a customizable pomodoro timer and to do list"}
                      projectLink={"https://bennami.github.io/pomodoro2"}
                      GithubLink={"https://github.com/bennami/pomodoro2"}
                      bgColor={colors[4]}
                      image={pomodoro}
                />


            </div>
        </div>



        </>
    )

};

export default ProjectGallery;
