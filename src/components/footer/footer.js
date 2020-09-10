import React from "react"
import footer from "./footer.scss"
import {IconContext} from "react-icons";
import {FaDribbble, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa/index";

const Footer =()=>{

    return(
        <footer className="footer" id={'footer'}>
            <div className="container">
                <div>
                    <h4 className="footer-title">BENNAMI   &copy; 2020</h4>
                    <p className="footer-title">info@bennami.com</p>
                </div>

                <div className={"intro-social"}>
                    <ul>
                        <li>
                            <a  target="_blank" rel="noopener noreferrer" href={"https://github.com/bennami"}>
                                <IconContext.Provider value={{ style: {fontSize: '25px', color: "whitesmoke"}}}>
                                    <FaGithub/>
                                </IconContext.Provider>
                            </a>
                        </li>

                        <li>
                            <a  target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/imane-benyecif-k-87099073/"}>
                                <IconContext.Provider value={{ style: {fontSize: '25px', color: "whitesmoke"}}}>
                                    <FaLinkedin/>
                                </IconContext.Provider>

                            </a>

                        </li>


                        <li>
                            <a   target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bennami_/">
                                <IconContext.Provider value={{ style: {fontSize: '25px', color: "whitesmoke"}}}>
                                    <FaInstagram/>
                                </IconContext.Provider>

                            </a>

                        </li>

                        <li>
                            <a   target="_blank" rel="noopener noreferrer" href="https://dribbble.com/bennami">
                                <IconContext.Provider value={{ style: {fontSize: '25px', color: "whitesmoke"}}}>
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
