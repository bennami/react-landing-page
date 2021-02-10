import React, {useRef} from "react";
import {useIntersection} from "react-use";
import {gsap} from "gsap";

import work1 from '../Assets/img/screenprint.jpg'
import work2 from '../Assets/img/shien print.jpg'
import work3 from '../Assets/img/work3.png'
import binaryMask from '../Assets/img/binary-square.png'
import work6 from '../Assets/img/work6.gif'
import work7 from '../Assets/img/work7.png'
import stayHealthy from '../Assets/img/work8.png'
import work9 from '../Assets/img/work8.jpg'
import work10 from '../Assets/img/work10.png'
import wotcBanner from '../Assets/img/wotcLogo.png';
import movie from "../Assets/img/movie.jpg";
import typod from "../Assets/img/typod.png";
import typoe from "../Assets/img/typoe.png";
import tatjana from "../Assets/img/tatjana gif.gif";
import gif from "../Assets/img/OS-2019-gif-.gif";
import znaCards from "../Assets/img/gif-cards.gif";
import girl from "../Assets/img/girllllll.gif";
import Soup from "../Assets/img/soup.jpg";
import pomodoro from "../Assets/img/pomodoro.png";
import react from "../Assets/img/react.gif";
import wash from "../Assets/img/wash-your-hands.jpg";
import arte from '../Assets/img/cccc.jpg';
import Card from "./card/card";

import "../Assets/css/mason.scss";



const Image = (props) =>{
    const colors=['#ba426c','#ff8f57','#231924','#342f74', '#3e023e'];

    let mason = useRef(null);
    const intersection = useIntersection(mason,{
        root: null,
        rootMargin: '0px',
        threshold: 0.3

    });

    //animation fade in
    const fadeIn = (element) =>{
        gsap.to(element,{
            opacity:1,
            y: -20,
            ease: 'Power4.out',
            stagger:{
                amount:0.4
            }
        });
    };



    const fadeOut = (element) =>{
        console.log('bye')
    };


    //check to see when viewport is visible to user
    intersection && intersection.intersectionRatio > 0.3
        ?fadeIn(".fadeIn5")
        :fadeOut(".fadeIn5");
    return (
        <>
            <div ref={mason} className=" container-mason">


                    <Card
                        style={{opacity:0}}
                        extraClass={"fadeIn5 mason"}
                        projectName={"Movie DB"}
                        projectDescription={'This website features a movie Api that lets you browse through a huge library of movies'}
                        projectLink={"https://bennami.github.io/Movie-browse/#/"}
                        GithubLink={"https://github.com/bennami/Movie-browse"}
                        bgColor={colors[3]}
                        image={movie}
                    />



                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={wotcBanner} alt=""/>



                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={wash} alt=""/>



                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={work2} alt=""/>




                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={work6} alt=""/>




                    <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={tatjana} alt=""/>



                    <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={arte} alt=""/>


                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={work1} alt=""/>



                {/*//row2*/}

                    <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={binaryMask} alt=""/>


                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={znaCards} alt=""/>


                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={typoe} alt=""/>








                    <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={work7} alt=""/>





                    <Card  style={{opacity:0}}
                           extraClass={"fadeIn5 mason"}
                        projectName={"React hooks"}
                        projectLink={"https://bennami.github.io/workshop-react"}
                        GithubLink={"https://github.com/bennami/workshop-react"}
                        bgColor={colors[2]}
                        projectDescription={"Website created to serve as a guide during a workshop"}
                        image={react}
                    />




                    <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={work10} alt=""/>

                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={work3} alt=""/>



                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={gif} alt=""/>

                <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={work9} alt=""/>

                    <img  style={{opacity:0}}  className={" fadeIn5 mason"} src={stayHealthy} alt=""/>

                    <img  style={{opacity:0}}  className={"fadeIn5 mason"} src={typod} alt=""/>

                    <Card  style={{opacity:0}}  extraClass={"fadeIn5 mason"}
                          projectName={"Toolsquare"}
                          projectDescription={"A simple landing page for a fresh start up in Antwerp"}
                          projectLink={"https://toolsquare.io"}
                          bgColor={colors[0]}

                    />

                    <Card  style={{opacity:0}}  extraClass={"fadeIn5 mason"}
                          projectName={"Soupsip workshop"}
                          projectDescription={'Website made as part of an educational workshop. Locally made soups to warm your heart'}
                          projectLink={"https://soupsip.netlify.app/"}
                          GithubLink={"https://github.com/bennami/soupsip-empty"}
                          bgColor={colors[1]}
                          image={Soup}
                    />


                <img   style={{opacity:0}}  className={"fadeIn5 mason"} src={girl} alt=""/>

                <Card  style={{opacity:0}}  extraClass={"fadeIn5 mason"}
                      projectName={"Pomodoro"}
                      projectDescription={"A simple interface that provides a customizable pomodoro timer and to do list"}
                      projectLink={"https://bennami.github.io/pomodoro2"}
                      GithubLink={"https://github.com/bennami/pomodoro2"}
                      bgColor={colors[4]}
                      image={pomodoro}
                />



            </div>

        </>
    )
}
export default Image