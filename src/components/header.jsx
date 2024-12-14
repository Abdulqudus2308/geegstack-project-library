import { Link } from "react-router-dom"
import gsLogo from "../assets/images/geegstack-logo-white.png"
import curveBottom from "../assets/images/project-bg.png" 


const Header = () => {
    return (
        <header>
            <div>
                <div className="flex">
               <Link to={"/"}>
                <img src={gsLogo} alt="Geegstack Academy" id="logo"/>
               </Link> 
               <Link to={"https://addmissions.geegstack.academy"} id="join-link"> Join Geegstack</Link>
            </div>
            <div id="intro">
                <h1> Library of our <span>Classic</span> Projects</h1>
                <p>Checkout some of the project completed in our Academy</p>
            </div>
            </div>
            
            <img src={curveBottom} alt="" width={"100%"}/>
        </header>
    )
}
export default Header