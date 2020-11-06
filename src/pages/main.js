import React from "react";
import {useState} from "react";
import {IconContext} from "react-icons"
import { FaLinkedin, FaInstagram, FaGithub, FaDribbble,FaPhp,FaSymfony,FaHtml5,FaCss3,FaDatabase,FaSass,FaJs,FaReact, FaPython, FaVuejs, FaArrowUp } from "react-icons/fa"
import {AiOutlineSmile} from "react-icons/ai"
import {Link} from "react-router-dom";
import '../Assets/css/homepage.scss';
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Card from "../components/card/card";
import portrait from '../Assets/img/portrait site-01.png'
import ProjectGallery from "../components/ProjectGallery";
import {useSpring, animated} from 'react-spring';


const Main = () =>{

    //randomize card colors
    const colors=['#ba426c','#ff8f57','#7a4060','#342f74', '#3e023e'];
    //const randomColor = colors[Math.floor(Math.random() * colors.length)];



    const [, setY] = useSpring(() => ({ y: 0 }))

    // show/hide back to top
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 800){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 800){
            setShowScroll(false)
        }
    };
    window.addEventListener('scroll', checkScrollTop)

    return(
        <>
            <Nav className={"nav-dark"}/>
            <button
                className={"back-to-top"}
                onClick={() => {
                    setY({
                        y: 0,
                        reset: true,
                        from: { y: window.scrollY },
                        onFrame: props => window.scroll(0, props.y)
                    })
                }}
                style={{zIndex:1, position: "fixed", bottom: 1, right: 2, marginBottom: 10, marginRight:10, display: showScroll ? 'flex' : 'none'}}>
                <IconContext.Provider value={{ style: {fontSize: '20px'}}}>
                <FaArrowUp/>
                </IconContext.Provider>
            </button>
            <div className={"container-intro"}>
                <div className={"intro-text"}>
                    <h1>Hi, I'm Imane </h1>
                    <p> I design, code and draw</p>
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
                    {/*<button className="intro-button"><Link to={'/projects'} ><span>Projects</span> </Link></button>*/}
                </div>
                <div className={"intro-image"}>
                    <img src={portrait} alt=""/>
                </div>

            </div>

            <main>
                <ProjectGallery/>
                <section className="services">
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
                            <p>drop me a <a href={"mailto:info@bennami.com"}>line</a> and let's have a coffee
                            <IconContext.Provider value={{ style: { marginLeft: "4px",fontSize: '1.2rem', color: "black", alignContent: "baseline"}}}>
                                <AiOutlineSmile/>
                            </IconContext.Provider>
                            </p>
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
