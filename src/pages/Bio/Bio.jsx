import image from "./../../assets/portrait-photo.jpg";
import "./bio.css";
import { Link } from "react-router-dom";
const Bio = () => {
    return (
        <>
            <section id="hero">
                <div>
                    <img src={image} alt="" />
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit omnis, amet et dolorum, quidem in soluta natus ullam adipisci nostrum blanditiis voluptatum, iusto dicta facere eius quaerat a officiis! Sequi?
                    Delectus, dolores unde ipsum accusantium nisi dolorum id deserunt nostrum reprehenderit nemo quam aut tenetur illum debitis? Suscipit repellat pariatur alias molestias hic veniam! Iusto autem iure itaque corrupti eligendi.
                    Dolore facere saepe iste expedita dolor libero quo deserunt, fuga, atque, debitis accusantium assumenda ut vitae hic modi nihil ullam sed voluptas perferendis veniam error fugit dicta ipsum. Assumenda, aut?
                </p>
                <Link to={"chat"}>
                    <button>
                        GO TO CAFE<i className="bi bi-chat-dots"></i>
                    </button>
                </Link>
            </section>
        </>
    );
}

export default Bio;