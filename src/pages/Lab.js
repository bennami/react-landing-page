import React from "react"
import ProjectGallery from "../components/ProjectGallery";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";

function Projects() {
    return(
        <>
            <Nav/>
            <h1>A collection of screenshots during the process of making</h1>
            <ProjectGallery/>
            <Footer/>
        </>
    )
}
export default Projects