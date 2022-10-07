import "./skillcard.css"

const Skillcard = ({ logo, progress = 0 }) => {
    let progressFill = (100 - progress) * 6.28;
    return (
        <>
            <div className="skillcard">
                <div id="details">
                    <div id="progress">
                        <svg width={250} height={250}>
                            <circle
                                cx={"50%"}
                                cy={"50%"}
                                r={"100"}
                            />
                            <circle
                                cx={"50%"}
                                cy={"50%"}
                                r={"100"}
                                style={{
                                    strokeDashoffset: `${progressFill}`
                                }} />
                        </svg>
                    </div>
                    <img src={logo} alt="LOGO" />
                </div>
                <div id="gloss"></div>
            </div>
        </>
    )
}

export default Skillcard;