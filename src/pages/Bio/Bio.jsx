import { hero_image } from "./../../assets";
import "./bio.css";
import { Link } from "react-router-dom";
import bio_desc from "./../../data/bio"
const Bio = () => {
    return (
        <>
            <section id="hero">
                <div>
                    <img src={hero_image} alt="" />
                </div>
                <div id="headings">
                    <h2>HI, I'm Allen</h2>
                    <h1>I'm a Fullstack Developer</h1>
                </div>
            </section>
            <section id="bio">
                <h2>
                    My Documentation
                </h2>
                <p>
                    {bio_desc}
                </p>
                {/* <Link to={"chat"}>
                    <button>
                        GO TO CAFE<i className="bi bi-chat-dots"></i>
                    </button>
                </Link> */}
            </section>
        </>
    );
}

export default Bio;