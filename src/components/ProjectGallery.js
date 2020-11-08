import React from 'react';

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
import "../Assets/css/mason.scss"
import Soup from "../Assets/img/soup.png"
import pomodoro from "../Assets/img/pomodoro.png"
import react from "../Assets/img/react.gif"
import wash from "../Assets/img/wash-your-hands.jpg"
import Card from "./card/card";
import LazyLoad from 'react-lazy-load';

const Image = (props) =>{
    const colors=['#ba426c','#ff8f57','#231924','#342f74', '#3e023e'];
    return (
        <>
            <div className="container-mason">
                <LazyLoad>
                <img className={"mason"} src={wotcBanner} alt=""/>
                </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={wash} alt=""/>
                </LazyLoad>

                <LazyLoad>
                <img className={"mason"} src={work2} alt=""/>
                </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={work6} alt=""/>
                </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={work1} alt=""/>
                </LazyLoad>
                <LazyLoad>
                <Card extraClass={"mason"}
                      projectName={"Soupsip workshop"}
                      projectDescription={'Website made as part of an educational workshop. Locally made soups to warm your heart'}
                      projectLink={"https://soupsip.netlify.app/"}
                      GithubLink={"https://github.com/bennami/soupsip-empty"}
                      bgColor={colors[1]}
                      image={Soup}
                />
                </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={znaCards} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={typod} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={typoe} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                    <Card
                        extraClass={"mason"}
                        projectName={"React hooks"}
                        projectLink={"https://bennami.github.io/workshop-react"}
                        GithubLink={"https://github.com/bennami/workshop-react"}
                        bgColor={colors[2]}
                        projectDescription={"Website created to serve as a guide during a workshop"}
                        image={react}
                    />
                </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={work5} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={tatjana} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={work7} alt=""/>
                    </LazyLoad>


                <LazyLoad>
                <img className={"mason"} src={work3} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={work8} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={gif} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={work9} alt=""/>
                    </LazyLoad>

                <LazyLoad>
                <Card
                    extraClass={"mason"}
                    projectName={"Movie DB"}
                    projectDescription={'This website features a movie Api that lets you browse through a huge library of movies'}
                    projectLink={"https://bennami.github.io/Movie-browse/#/"}
                    GithubLink={"https://github.com/bennami/Movie-browse"}
                    bgColor={colors[3]}
                    image={movie}
                />
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={work10} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={work11} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={il} alt=""/>
                    </LazyLoad>
                <LazyLoad>
                <img className={"mason"} src={girl} alt=""/>
                    </LazyLoad>

                <LazyLoad>
                <Card extraClass={"mason"}
                      projectName={"Pomodoro"}
                      projectDescription={"A simple interface that provides a customizable pomodoro timer and to do list"}
                      projectLink={"https://bennami.github.io/pomodoro2"}
                      GithubLink={"https://github.com/bennami/pomodoro2"}
                      bgColor={colors[4]}
                      image={pomodoro}
                />
                    </LazyLoad>


            </div>

        </>
    )
}
export default Image