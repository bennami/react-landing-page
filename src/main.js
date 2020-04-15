import React,{useState} from "react";
import home1 from "./img/home1.svg";
import {Link, useHistory} from "react-router-dom";
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
           <header>
               <img src= {home1} />
               <div>
                   <h1> Design &amp; web development <br/> a multidisciplinary studio</h1>

                   <Link to={"/contact"}>Get in touch </Link>
               </div>
           </header>

            <main>
                <section className="services">
                    <h2>We should work together</h2>
                    <div className="service-container">
                        <img src="service-card service-one" alt=""/>
                        <div src="" alt="" className="service-description">
                            <h3>Your one stop shop for everything</h3>
                            <div>browse through the projects to discover what I do</div>

                        </div>
                    </div>

                    <div className="service-container">
                        <img src="service-card service-two" alt=""/>
                        <div src="" alt="" className="service-description">
                            <h3>About me</h3>
                            <div>Imane graduated in 2017 as a graphic designer. Since then she went on and acquired a second degree in Art education and is currently enrolled in a web development course. Her work is a combination of creativity and socially relevant topics. Imane enjoys combining analogue techniques with new technologies to provide a unique result in her work. <Link to={"/cv"}>Check out the resume</Link> </div>

                        </div>
                    </div>

                    <div className="service-container">
                        <img src="service-card service-three" alt=""/>
                        <div src="" alt="" className="service-description">
                            <h3>available 24/7</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur assumenda atque, aut cum et impedit odio praesentium quibusdam temporibus. Et explicabo sed ut vitae. Impedit in praesentium quae suscipit.</div>

                        </div>
                    </div>

                </section>
                <section>
                    <h2>Join our newsletter</h2>
                    <form action="" onSubmit={join}>
                        <input type="email" placeholder={"your email goes here"} onChange={(e) =>setjoined(e.target.value)}/>
                        <input type="submit" value={"join now!"}/>

                    </form>
                </section>
            </main>
        </React.Fragment>
    )

};

export default Main;