import "./../pages.css"
import { Skillcard, Projectcard } from "../../components";
import { frontendSkills } from "../../data/skills";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"
import { frontendProjects } from "../../data/projects";

const Frontend = () => {
    return (

        <>
            <section className="page frontend hero">
                <div>
                    <h1>Frontend Developemnt</h1>
                </div>
            </section>
            <section className="page frontend skills">
                <h2>Languages & Frameworks</h2>
                <div id="card-container">
                    {
                        frontendSkills.map((skillObj, index) => {
                            return <Skillcard
                                key={index}
                                logo={skillObj.logo}
                                progress={skillObj.level} />
                        })
                    }
                </div>
            </section>
            <section className="page frontend projects">
                <h2>Projects</h2>
                <div id="projectcard-container">
                    {
                        frontendProjects.map((projectObj, index) => {
                            return <Projectcard
                                key={index}
                                image={projectObj.image}
                                projectDesc={projectObj.desc}
                                link={projectObj.link}

                            />
                        })
                    }
                </div>
            </section>
            <section className="page frontend call-to-action">
                <Link to={"chat"}>
                    <button>
                        GO TO CAFE<i className="bi bi-chat-dots"></i>
                    </button>
                </Link>
            </section>
        </>
    );
}

export default Frontend;