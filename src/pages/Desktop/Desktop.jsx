import "./../pages.css"
import { Skillcard, Projectcard } from "../../components";
import { desktopSkills } from "../../data/skills";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"
import { desktopProjects } from "./../../data/projects"
const Desktop = () => {
    return (

        <>
            <section className="page desktop hero">
                <div>
                    <h1>Desktop Application Developemnt</h1>
                </div>
            </section>
            <section className="page desktop skills">
                <h2>Languages & Frameworks</h2>
                <div id="card-container">
                    {
                        desktopSkills.map((skillObj, index) => {
                            return <Skillcard
                                key={index}
                                logo={skillObj.logo}
                                progress={skillObj.level} />
                        })
                    }
                </div>
            </section>
            <section className="page desktop projects">
                <h2>Projects</h2>
                <div id="projectcard-container">
                    {
                        desktopProjects.map((projectObj, index) => {
                            return <Projectcard key={index} image={projectObj.image} projectName={projectObj.name} />
                        })
                    }
                </div>
            </section>
            <section className="page desktop call-to-action">
                <Link to={"contact"}>
                    <button>
                        GO TO CAFE<i className="bi bi-chat-dots"></i>
                    </button>
                </Link>
            </section>
        </>
    );
}

export default Desktop;