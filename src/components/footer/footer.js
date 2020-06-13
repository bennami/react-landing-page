import React from "react"
import footer from "./footer.scss"

const Footer =()=>{

    return(
        <footer className="footer" id={'footer'}>
            <div className="container">
                <h2 className="footer-title">BENNAMI &mdash; &copy; 2020</h2>

                <ul className="social-media">
                    <li className="social-media__item">
                        <a href="mailto:info@bennami.com">Email</a>
                    </li>
                    <li className="social-media__item">
                        <a href="https://www.linkedin.com/in/imane-benyecif-k-87099073/">Linkedin</a>
                    </li>
                    <li className="social-media__item">
                        <a href="https://github.com/bennami">Github</a>
                    </li>
                    <li className="social-media__item">
                        <a href="https://dribbble.com/bennami">Dribble</a>
                    </li>

                </ul>
            </div>
        </footer>

    )
}
export default Footer
