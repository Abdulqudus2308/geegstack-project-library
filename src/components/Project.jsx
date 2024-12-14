import { Link } from "react-router-dom"
const Project = ({img, name, description, link}) => {
    return (
        <article>
            <img src={img} alt={name} />
            <div>
                <h2>{name}</h2>
            <p>{description}</p>
            <Link to={link}>View Project</Link>
            </div>
            
        </article>
    )
}
export default Project