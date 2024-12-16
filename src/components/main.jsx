// import { Link } from "react-router-dom"
import ProjectSection from "./ProjectSection"
import allProjects from "../assets/data.json"
import { useState } from "react"

const Main = () => {
    const [activeLink, setActiveLink] = useState(""); 
    return (
        <main>
            <div id="projects-header">
                <h2>Projects</h2>
                <div id="links-container" className="flex">
                    <a href={"#HTML & CSS"}
                    onClick={() => setActiveLink("HTML & CSS")} 
                    className={activeLink === "HTML & CSS" ? "active" : ""}
                    >HTML & CSS</a>
                    <a href={"#JavaScript"} 
                    onClick={() => setActiveLink("JavaScript")}
                    className={activeLink === "JavaScript" ? "active" : ""}
                    >JavaScript</a>
                    <a href={"#ReactJS"} 
                    onClick={() => setActiveLink("ReactJS")}
                    className={activeLink === "ReactJS" ? "active" : ""}
                    >ReactJS</a>
                    <a href={"#Fullstack"} 
                    onClick={() => setActiveLink("Fullstack")}
                    className={activeLink === "Fullstack" ? "active" : ""}
                    >Fullstack</a>
                </div>
            </div>
            <ProjectSection title={"HTML & CSS"} Projects={allProjects["HTML & CSS"]}/>
            <ProjectSection title={"JavaScript"} Projects={allProjects["JavaScript"]}/>
            <ProjectSection title={"ReactJS"} Projects={allProjects["ReactJS"]}/>
            <ProjectSection title={"Fullstack"} Projects={allProjects["Fullstack"]}/>

        </main>
    )
}
export default Main