import "./../pages.css"
import { Skillcard, Projectcard } from "../../components";
import { webscrapingSkills } from "../../data/skills";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"
import { webscrapingProjects } from "../../data/projects";

const Webscraping = () => {
    return (

        <>
            <section className="page webscraping hero">
                <div>
                    <h1>WebScraping</h1>
                </div>
            </section>
            <section className="page webscraping skills">
                <h2>Languages & Frameworks</h2>
                <div id="card-container">
                    {
                        webscrapingSkills.map((skillObj, index) => {
                            return <Skillcard
                                key={index}
                                logo={skillObj.logo}
                                progress={skillObj.level} />
                        })
                    }
                </div>
            </section>
            <section className="page webscraping projects">
                <h2>Projects</h2>
                <div id="projectcard-container">
                    {
                        webscrapingProjects.map((projectObj, index) => {
                            return <Projectcard key={index} image={projectObj.image} projectName={projectObj.name} />
                        })
                    }

                </div>
            </section>
            <section className="page webscraping call-to-action">
                <Link to={"contact"}>
                    <button>
                        GO TO CAFE<i className="bi bi-chat-dots"></i>
                    </button>
                </Link>
            </section>
        </>
    );
}

export default Webscraping;