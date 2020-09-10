import React from "react";
import {IconContext} from "react-icons"
import { FaLinkedin, FaInstagram, FaGithub, FaDribbble,FaPhp,FaSymfony,FaHtml5,FaCss3,FaDatabase,FaSass,FaJs,FaReact, FaPython, FaVuejs, } from "react-icons/fa"
import {AiOutlineSmile} from "react-icons/ai"
import {Link} from "react-router-dom";
import '../Assets/css/homepage.scss';
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Card from "../components/card/card";

const Main = () =>{

    //randomize card colors
    const colors=['#ba426c','#ff8f57','#7a4060','#342f74', '#3e023e'];
    //const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return(
        <>
            <Nav className={"nav-dark"}/>
            <div className={"container-intro"}>
                <div className={"intro-text"}>
                    <h1>Hi, I'm Imane </h1>
                    <p> I design, code and draw</p>
                    <button className="intro-button"><Link to={'/projects'} ><span>Projects</span> </Link></button>
                </div>

            </div>

            <main>
                <section className="services">
                    <div className="service-container1">
                        <h2>Some projects I am currently working on</h2>
                        <div className={"cards"}>

                            <Card projectName={"Movie DB"}
                                  projectDescription={"This website features a movie Api that lets you browse through a huge library of movies"}
                                  projectLink={"https://bennami.github.io/Movie-browse/#/"}
                                  GithubLink={"https://github.com/bennami/Movie-browse"}
                                  bgColor={colors[0]}
                            />
                            <Card projectName={"Simple portfolio"}
                                  projectDescription={'simple responsive portfolio for Jason'}
                                  projectLink={"https://bennami.github.io/portfolio-site-with-grid/"}
                                  GithubLink={"https://bennami.github/portfolio-site-with-grid/"}
                                  bgColor={colors[1]}
                            />

                            <Card projectName={"Workshop overview"}
                                  projectLink={"https://bennami.github.io/workshop-react"}
                                  GithubLink={"https://github.com/bennami/workshop-react"}
                                  bgColor={colors[2]}
                                  projectDescription={"Website created to serve as a guide during a workshop"}
                            />

                            <Card projectName={"weather app"}
                                  projectDescription={" a beautifully designed site to get the weather for the upcoming 5 days"}
                                  bgColor={colors[3]}
                                  projectLink={"https://bennami.github.io/weather-API/"}
                                  GithubLink={"https://github.com/bennami/weather-API"}
                            />
                            <Card projectName={"Pomodoro"}
                                  projectDescription={"A simple interface that provides a customizable pomodoro timer and to do list"}
                                  bgColor={colors[4]}
                                  projectLink={"https://bennami.github.io/pomodoro2"}
                                  GithubLink={"https://github.com/bennami/pomodoro2"}
                            />
                            <Card projectName={"Poke-dex"}
                                  projectDescription={"The classic poke-dex from the pokemon series in a web app! browse through the entire library of pokemon thanks to the PokeApi"}
                                  projectLink={"https://pokedexphp.herokuapp.com/"}
                                  GithubLink={"https://github.com/bennami/pokephp"}
                                  bgColor={colors[0]}
                            />
                            <Card projectName={"Barista bootcamp"}
                                  projectDescription={'One pager for a barista boot camp'}
                                  projectLink={"https://bennami.github.io/one-pager-vanilla/"}
                                  GithubLink={"https://github.com/bennami/one-pager-vanilla"}
                                  bgColor={colors[1]}
                            />

                            <Card projectName={"Guestbook"}
                                  projectDescription={'simple guestbook feature kept with JSON and PHP'}
                                  projectLink={"https://guestbookphp.herokuapp.com/"}
                                  GithubLink={"https://github.com/bennami/guestbook"}
                                  bgColor={colors[2]}
                            />

                        </div>
                    </div>

                    <div className="service-container2"  id={"about"}>
                        <ul>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                    <FaHtml5/>
                                </IconContext.Provider>
                            </li>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                    <FaVuejs/>
                                </IconContext.Provider>
                            </li>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                    <FaPython/>
                                </IconContext.Provider>
                            </li>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                    <FaPhp/>
                                </IconContext.Provider></li>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                    <FaJs/>
                                </IconContext.Provider>
                            </li>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                    <FaCss3/>
                                </IconContext.Provider>
                            </li>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                    <FaSass/>
                                </IconContext.Provider>
                            </li>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                    <FaDatabase/>
                                </IconContext.Provider>
                            </li>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                <FaReact/>
                                </IconContext.Provider>
                            </li>
                            <li>
                                <IconContext.Provider value={{ style: {fontSize: '25px'}}}>
                                    <FaSymfony/>
                                </IconContext.Provider>
                            </li>
                        </ul>
                        <div className="service-description">
                            <div className={"text"}>Hi! I'm Imane. I am a web developer and graphic designer. I graduated in 2017 as a graphic designer. Since then, I went on and acquired a second degree in Art education and I enrolled in a super intense web development boot camp that gave me the opportunity to work as a web developer for a very cool start up in Antwerp.<br/><br/>I love to work on projects that involve different mediums such as analogue printing and new digital tools. Right now I am focusing on front end frameworks such as React and Vue Js, but I have worked with Symfony <FaPhp/> and Django <FaPython/> for back end projects, MySQL, PostgreSQL and many more.<br/><br/> <span>
                                <Link to={"/projects"}>
                                    Check out some of my work if you are curious!
                                </Link>
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className="service-container3">
                        <div className="service-img">
                        </div>
                        <div className="service-description">
                            <p className={"bigP"}>I would love to work on your exciting projects!</p>
                            <div className={"second-line-text"}>
                            <p>drop me a <a href={"mailto:info@bennami.com"}>line</a> and let's have a coffee</p>
                            <IconContext.Provider value={{ style: { marginLeft: "4px",fontSize: '1.2rem', color: "black", alignContent: "baseline"}}}>
                                <AiOutlineSmile/>
                            </IconContext.Provider>
                            </div>
                            <div className={"intro-social"}>
                                <ul>

                                    <li>
                                        <a  target="_blank" rel="noopener noreferrer" href={"https://github.com/bennami"}>
                                            <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                                <FaGithub/>
                                            </IconContext.Provider>
                                        </a>

                                    </li>

                                    <li>
                                        <a  target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/imane-benyecif-k-87099073/"}>
                                            <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                                <FaLinkedin/>
                                            </IconContext.Provider>

                                        </a>

                                    </li>


                                    <li>
                                        <a   target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bennami_/">
                                            <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                                <FaInstagram/>
                                            </IconContext.Provider>

                                        </a>

                                    </li>

                                    <li>
                                        <a   target="_blank" rel="noopener noreferrer" href="https://dribbble.com/bennami">
                                            <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                                <FaDribbble/>
                                            </IconContext.Provider>

                                        </a>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
};

export default Main;
