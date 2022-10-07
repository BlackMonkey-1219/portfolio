import "./projectcard.css"
import { Link } from "react-router-dom";
import image_ from "./../../assets/projcet-snap.PNG";

const Projcetcard = ({ image, projectName }) => {
    return (
        <>
            <div className="project-card">

                <div className="img">
                    <img src={image_} alt="project-snpashot" />
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis consectetur, sint, repellendus error necessitatibus nisi officia aliquid facilis illum ex tenetur placeat cum possimus similique quibusdam ad doloremque, quos corrupti.</p>
                <Link to={`projects/${projectName}`}>GOTO PROJECT
                </Link>
            </div>
        </>
    )
}

export default Projcetcard;