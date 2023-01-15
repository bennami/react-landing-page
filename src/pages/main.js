import React, {useRef, useEffect} from "react";
import {useIntersection} from "react-use";
import {useState} from "react";
import {IconContext} from "react-icons"
import { FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa"
import {AiOutlineSmile} from "react-icons/ai"
import '../Assets/css/homepage.scss';
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Projects from "../projects/projects";
import {gsap} from "gsap";
import portrait from '../Assets/img/portrait.png'
import {useSpring,} from 'react-spring';
import arrow from '../Assets/img/arrow.svg'
import contactImage from '../Assets/img/work10.png'

const Main = () =>{

    let logoItem = useRef(null);
    let textItem = useRef(null);
    let introContainer = useRef(null);
    let introContainer2 = useRef(null);
    let gallery = useRef(null);

    const intersection = useIntersection(introContainer,{
        root: null,
        rootMargin: '0px',
        threshold: 0.2
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

    const fadeIn = (element) =>{
        gsap.to(element,{opacity:1, y:-10, ease: 'Power4.easeInOut', delay: .01});
    };
    const fadeOut = (element) =>{
        gsap.to(element,{opacity:0, y:-10, ease: 'Power4.easeInOut', delay: .01});
    };

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
                    <p> I design, code and draw from Antwerp</p>
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
                        </ul>
                    </div>
                </div>
                <div className={"intro-image"}>
                    <img style={{opacity:0}} ref={el => {logoItem = el}} src={portrait} alt=""/>
                </div>
            </div>
            <main>
                <Projects/>
                <section  className="services">
                    <div ref={introContainer}  className="service-container2"  id={"about"}>
                        <div ref={introContainer2} className="service-description">
                            <div  
                                style={{opacity:0}}  
                                className={"fadeIn2 text"}
                            >
                                <p>Welcome to my site! I tend to call myself a digital artist although labeling myself has always been a tricky thing. I graduated in 2017 as a graphic designer. Since then, I acquired a second degree in Art education and enrolled in a super intense web development bootcamp that gave me the opportunity to dive into the world of programing.</p>
                                <br />
                                <p>
                                As of now I work part time at Code Space as a coach and researcher at St. Lucas Antwerp scool of arts.
                                </p>
                                <br />
                                <p>I love to work on projects that involve different mediums such as analogue printing and new digital tools. Right now I am focusing on front end development and 3D modeling, but my focus tends to shift a lot. One week I am super invested in designing a logo, the other I am trying to create some kind of tool with p5js. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div ref={gallery} className="service-container3">
                        <div className="fadeIn3 service-img">
                            <img className="contact-image" src={contactImage} alt="illustration of an island"></img>
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
