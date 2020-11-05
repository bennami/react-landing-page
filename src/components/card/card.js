import React from 'react';
import "./card.scss"
import {FaGithub} from "react-icons/all";

import {IconContext} from "react-icons";

function Card({projectName,projectDescription,projectLink,GithubLink,bgColor,bgImage,image, extraClass}) {

    return(

        <div className={`card ${extraClass}`} style={{backgroundColor: `${bgColor}`,
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"}}
        >
            <div>
                <a target="_blank" rel="noopener noreferrer"  href={projectLink} style={{marginTop: '0px', marginLeft: '0px'}}>
                <img src={image} alt="" style={{borderRadius: '6px'}}/>
                </a>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer"  href={projectLink}>
                            <h3>{projectName}</h3>
                        </a>
                    </li>
                    <li>

                        <a target="_blank" rel="noopener noreferrer"  href={GithubLink}>
                            <IconContext.Provider value={{ style: {fontSize: '20px',color:"white"}}}>
                                <FaGithub/>
                            </IconContext.Provider>
                        </a>
                    </li>
                </ul>

            </div>
            <h5>{projectDescription}</h5>
        </div>

    )

}

export default Card
