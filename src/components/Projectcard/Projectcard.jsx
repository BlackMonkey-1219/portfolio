import "./projectcard.css"

const Projcetcard = ({ image, projectDesc, link }) => {
    return (
        <>
            <div className="project-card">

                <div className="img">
                    <img src={image} alt="project-snpashot" />
                </div>
                <p>{projectDesc}</p>
                <a href={link}>GOTO PROJECT
                </a>
            </div>
        </>
    )
}

export default Projcetcard;