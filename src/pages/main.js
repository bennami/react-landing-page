import React, {useRef, useEffect} from "react";
import {useIntersection} from "react-use";
import {useState} from "react";
import {IconContext} from "react-icons"
import { FaLinkedin, FaInstagram, FaGithub, FaDribbble,FaPhp,FaSymfony,FaHtml5,FaCss3,FaDatabase,FaSass,FaJs,FaReact, FaPython, FaVuejs,} from "react-icons/fa"
import {AiOutlineSmile} from "react-icons/ai"
import {Link} from "react-router-dom";
import '../Assets/css/homepage.scss';
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import {gsap} from "gsap";
import portrait from '../Assets/img/portrait site-01.png'
import ProjectGallery from "../components/ProjectGallery";
import {useSpring,} from 'react-spring';
import arrow from '../Assets/img/arrow.svg'


const Main = () =>{

    //randomize card colors
    //const colors=['#ba426c','#ff8f57','#7a4060','#342f74', '#3e023e'];
    //const randomColor = colors[Math.floor(Math.random() * colors.length)];

    let logoItem = useRef(null);
    let textItem = useRef(null);
    let introContainer = useRef(null);
    let introContainer2 = useRef(null);
    let gallery = useRef(null);



    const intersection = useIntersection(introContainer,{
        root: null,
        rootMargin: '0px',
        threshold: 0.3

    });
    const intersection2 = useIntersection(introContainer2,{
        root: null,
        rootMargin: '0px',
        threshold: 0.3

    });
    const intersection3 = useIntersection(gallery,{
        root: null,
        rootMargin: '0px',
        threshold: 0.5

    });

    //animation fade in
    const fadeIn = (element) =>{
        gsap.to(element,{opacity:1, y:-30, ease: 'Power4.easeInOut', delay: .2});
    };



    const fadeOut = (element) =>{
        gsap.to(element,{opacity:0, y:-30, ease: 'Power4.easeInOut', delay: .2});
    };


    //check to see when viewport is visible to user
    intersection && intersection.intersectionRatio < 0.3
    ?fadeOut(".fadeIn")
    :fadeIn(".fadeIn");



    intersection2 && intersection2.intersectionRatio < 0.3
        ?fadeOut(".fadeIn2")
         :fadeIn(".fadeIn2");


    intersection3 && intersection3.intersectionRatio < 0.3
        ?fadeOut(".fadeIn3")
        :fadeIn(".fadeIn3");


    useEffect(()=>{
      gsap.to(logoItem,{opacity:1, y:-30, ease: 'Power4.easeInOut', delay: .2});
      gsap.to(textItem,{opacity:1, y:-30, ease: 'Power4.easeInOut', delay: .2});

    },[])

    const [, setY] = useSpring(() => ({ y: 0 }));

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
                <i><img style={{transform: 'rotate(-90deg)',marginLeft:'0',margin:'0.2rem'}} src={arrow} alt=""/></i>
            </button>
            <div className={"container-intro"}>
                <div style={{opacity:0}}  ref={el => {textItem = el}}  className={"intro-text"}>
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
                </div>
                <div className={"intro-image"}>
                    <img style={{opacity:0}} ref={el => {logoItem = el}} src={portrait} alt=""/>
                </div>

            </div>

            <main>

                <section  className="services">
                    <div ref={introContainer}  className="service-container2"  id={"about"}>
                        <ul  style={{opacity:0}} className={"fadeIn"} >
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
                        <div ref={introContainer2} className="service-description">
                            <div  style={{opacity:0}}  className={"fadeIn2 text"}>
                                Hi! I'm Imane. I am a web developer and graphic designer. I graduated in 2017 as a graphic designer. Since then, I acquired a second degree in Art education and I enrolled in a super intense web development bootcamp that gave me the opportunity to work as a web developer for a very cool start up in Antwerp.<br/><br/>I love to work on projects that involve different mediums such as analogue printing and new digital tools. Right now I am focusing on front end development with frameworks like React and Vue Js, but I have experience in back end development,having worked with frameworks like Symfony <FaPhp/> and Django <FaPython/>
                            <br/>
                            <br/>
                            <span  style={{opacity:0}}  className={"fadeIn2 ProjectLink"}>
                                <Link to={"/projects"}>
                                    Check out some of my work if you are curious! <i><img src={arrow} alt=""/></i>
                                </Link>
                            </span>
                            </div>
                        </div>
                    </div>


                    <ProjectGallery />

                    <div ref={gallery} className="service-container3">
                        <div className="fadeIn3 service-img">
                        </div>
                        <div className="fadeIn3 service-description">
                            <p className={"bigP"}>I would love to work on your exciting projects!</p>
                            <div className={"second-line-text"}>
                            <p>drop me a <a href={"mailto:info@bennami.com"}>line</a> and let's have a coffee
                            <IconContext.Provider value={{ style: { marginLeft: "4px",fontSize: '1.2rem', color: "black", alignContent: "baseline"}}}>
                                <AiOutlineSmile/>
                            </IconContext.Provider>
                            </p>
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
