import React from 'react';
import "../Assets/css/card.scss"

function Card({projectName,projectDescription,projectLink}) {

    return(
        <a target="_blank" rel="noopener noreferrer"  href={projectLink}>
        <div className={'card'} >
            <h3>{projectName}</h3>
            <h5>{projectDescription}</h5>
        </div>
        </a>
    )

}

export default Card
