import { Skillcard, Projectcard } from "../../components";
import { backendSkills } from "../../data/skills";
import "bootstrap-icons/font/bootstrap-icons.json"
import { Link } from "react-router-dom"
import { backendProjects } from "./../../data/projects"

const Backend = () => {
    return (
        <>
            <section className="page backend hero">
                <div>
                    <h1>API Developemnt</h1>
                </div>
            </section>
            <section className="page backend skills">
                <h2>Languages & Frameworks</h2>
                <div id="card-container">
                    {
                        backendSkills.map((skillObj, index) => {
                            return <Skillcard
                                key={index}
                                logo={skillObj.logo}
                                progress={skillObj.level} />
                        })
                    }
                </div>
            </section>
            <section className="page backend projects">
                <h2>Projects</h2>
                <div id="projectcard-container">
                    {
                        backendProjects.map((projectObj, index) => {
                            return <Projectcard key={index} image={projectObj.image} projectName={projectObj.name} />
                        })
                    }
                </div>
            </section>
            <section className="page backend call-to-action">
                <Link to={"chat"}>
                    <button>
                        GO TO CAFE<i className="bi bi-chat-dots"></i>
                    </button>
                </Link>
            </section>
        </>
    )
}

export default Backend;