import React from "react";
import Nav from "../components/nav/nav";
import {IconContext} from "react-icons";
import {AiOutlineSmile} from "react-icons/ai/index";
import {FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaMailBulk} from "react-icons/fa/index";
import Footer from "../components/footer/footer";
import '../Assets/css/contact.scss';
import portrait from "../Assets/img/portrait site-01.png";
import work10 from "../Assets/img/work10.png"

const Contact = () =>{
    return(
        <>
         <Nav/>
            <div className={"container-contact"}>
                <div className={"intro-text"}>
                    <h2>I would love to work on your exciting projects!</h2>
                    <p>drop me a <a style={{textDecoration:"underline"}} href={"mailto:info@bennami.com"}>line</a> and let's have a coffee
                        <IconContext.Provider value={{ style: { marginLeft: "4px",fontSize: '1.2rem', color: "black", alignContent: "baseline",verticalAlign: "middle"}}}>
                            <AiOutlineSmile/>
                        </IconContext.Provider>
                    </p>
                    <div  className={"intro-social"}>
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
                    <img  style={{padding:"4vw",width: "100%"}} src={work10} alt=""/>
                </div>

            </div>
         <Footer/>
        </>
    )

};

export default Contact;
