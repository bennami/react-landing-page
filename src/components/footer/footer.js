import React from "react"
import footer from "./footer.scss"
import {IconContext} from "react-icons";
import {FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaHeart,} from "react-icons/fa/index";
import {FiMail} from "react-icons/fi/index";


const Footer =()=>{

    return(
        <footer className="footer" id={'footer'}>
            <div className="container">
                <div>
                    <h4 className="footer-title">BENNAMI   &copy; 2020</h4>
                    <a style={{color:"white"}} href="mailto:info@bennami.com">
                    <p className="footer-title"><i><IconContext.Provider value={{ style: { verticalAlign:'middle',fontSize: '15px', color: "whitesmoke"}}}>
                        <FiMail/>
                    </IconContext.Provider></i> info@bennami.com</p></a>
                </div>

                <div className={"intro-social"}>
                    <p>Let's link up <i><IconContext.Provider value={{ style: {fontSize: '10px', color: "whitesmoke"}}}>
                        <FaHeart/>
                    </IconContext.Provider></i></p>
                    <br/>
                    <ul>
                        <li>
                            <a  target="_blank" rel="noopener noreferrer" href={"https://github.com/bennami"}>
                                <IconContext.Provider value={{ style: {fontSize: '20px', color: "whitesmoke"}}}>
                                    <FaGithub/>
                                </IconContext.Provider>
                            </a>
                        </li>

                        <li>
                            <a  target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/imane-benyecif-k-87099073/"}>
                                <IconContext.Provider value={{ style: {fontSize: '20px', color: "whitesmoke"}}}>
                                    <FaLinkedin/>
                                </IconContext.Provider>

                            </a>

                        </li>


                        <li>
                            <a   target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bennami_/">
                                <IconContext.Provider value={{ style: {fontSize: '20px', color: "whitesmoke"}}}>
                                    <FaInstagram/>
                                </IconContext.Provider>

                            </a>

                        </li>

                        <li>
                            <a   target="_blank" rel="noopener noreferrer" href="https://dribbble.com/bennami">
                                <IconContext.Provider value={{ style: {fontSize: '20px', color: "whitesmoke"}}}>
                                    <FaDribbble/>
                                </IconContext.Provider>

                            </a>

                        </li>
                    </ul>
                </div>

            </div>
        </footer>

    )
}
export default Footer
