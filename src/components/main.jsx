import { Link } from "react-router-dom"
import ProjectSection from "./ProjectSection"
import allProjects from "../assets/data.json"

const Main = () => {
    return (
        <main>
            <div id="projects-header">
                <h2>Projects</h2>
                <div id="links-container" className="flex">
                    <Link to={"/"}>HTML & CSS</Link>
                    <Link to={"/"}>JavaScript</Link>
                    <Link to={"/"}>ReactJS</Link>
                    <Link to={"/"}>Fullstack</Link>
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