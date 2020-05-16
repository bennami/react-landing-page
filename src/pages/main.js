import React,{useState} from "react";
import {DevIcons}  from  "react-icons";
import {fontAwesome} from "react-icons";
import {IconContext} from "react-icons"
import { FaLinkedin, FaInstagram, FaGithub, FaDribbble} from "react-icons/fa"

import example from "../img/Screenshot 2020-04-09 at 15.48.29.png"
import eyes from "../img/eyes.svg"
import arrow from "../img/arrow.svg"
import {Link, useHistory} from "react-router-dom";
import '../Assets/css/homepage.scss';
import Nav from "../components/nav";
import Footer from "../components/footer";

const Main = () =>{
    const [joined,setjoined] = useState("");
    const history = useHistory();

    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            history.push(`/thanks/${joined}`,date)
        }

    };


    return(
        <React.Fragment>
            <Nav/>


            <div className={"container-intro"}>
                <div className={"intro-text"}>
                   <h1>Hi, I'm Imane </h1>
                    <p> I design, code and draw</p>
                  <button className="intro-button"><Link to={"/contact"}>Get in touch </Link></button>
                  <button className="intro-button"><Link to={"/projects"}>Browse projects </Link></button>
                </div>



                   <div className={"container-social"}>
                       <ul>

                           <li>
                               <a  target="_blank" rel="noopener noreferrer" href={"https://github.com/bennami"}>
                                   <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                   <FaGithub/>
                                   </IconContext.Provider>
                               </a>
                           </li>
                           <li><p>Github</p></li>
                       </ul>
                       <ul>
                           <li>
                               <a  target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/imane-benyecif-k-87099073/"}>
                                   <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                   <FaLinkedin/>
                                   </IconContext.Provider>
                                </a>
                           </li>
                          <li> <p>Linkedin</p></li>
                       </ul>
                       <ul>
                           <li>
                               <a   target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bennami_/">
                                   <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                   <FaInstagram/>
                                   </IconContext.Provider>
                               </a>
                           </li>
                          <li> <p>Instagram</p></li>
                       </ul>
                       <ul>
                           <li>
                               <a   target="_blank" rel="noopener noreferrer" href="https://dribbble.com/bennami">
                                   <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                       <FaDribbble/>
                                   </IconContext.Provider>
                               </a>
                           </li>
                           <li> <p>Dribble</p></li>
                       </ul>

                   </div>
               </div>



            <main>
                <section className="services">
                    <div className="service-container">
                        <div className="service-img">
                        <img src={example} alt=""/>
                        </div>
                        <div className="service-description">
                            <h3>Your one stop shop for everything</h3>
                            <div>browse through the projects to discover what I do</div>
                            <Link to={"/projects"}><img src={eyes} alt=""/></Link>
                        </div>
                    </div>

                    <div className="service-container2">
                        <div className="service-description" id={"#about"}>
                            <div className={"text"}>Imane graduated in 2017 as a graphic designer. Since then she went on and acquired a second degree in Art education and is currently enrolled in a web development course. Her work is a combination of creativity and socially relevant topics. Imane enjoys combining analogue techniques with new technologies to provide a unique result in her work.<p><Link to={"/cv"}>Check out the resume<img src={arrow}/></Link> </p>  </div>
                        </div>
                    </div>

                    <div className="service-container">
                        <div className="service-img">
                            <img src={example} alt=""/>
                        </div>
                        <div className="service-description">
                            <h3>available 24/7</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur assumenda atque, aut cum et impedit odio praesentium quibusdam temporibus. Et explicabo sed ut vitae. Impedit in praesentium quae suscipit.</div>

                        </div>
                    </div>

                </section>
                <section>
                    <h2>Join the newsletter</h2>
                    <form action="" onSubmit={join}>
                        <input type="email" placeholder={"your email goes here"} onChange={(e) =>setjoined(e.target.value)}/>
                        <input type="submit" value={"join now!"}/>

                    </form>
                </section>
            </main>
            <footer class="footer">
                <div class="container">
                    <h2 class="footer-title">BENNAMI &mdash; 2020</h2>

                    <ul class="social-media">
                        <li class="social-media__item">
                            <a href="https://www.instagram.com/bennami_/">
                                Instagram
                            </a>
                        </li>
                        <li class="social-media__item">
                            <a href="https://dribbble.com/bennami">
                                Dribble
                            </a>
                        </li>
                        <li class="social-media__item">
                            <a href="mail">
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>
    )

};

export default Main;
