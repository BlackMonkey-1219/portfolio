import { Link } from "react-router-dom";
import links from "../../data/navbarLinks";
import logo from "./../../assets/logo.png";
import "./navbar.css";
import "bootstrap-icons/font/bootstrap-icons.json"

const Navbar = () => {
    return <>
        <div id="nav-container">
            <Link to={"/"}>
                <img src={logo} alt="CyberWolfLogo" />
            </Link>
            <nav>
                {
                    links.map((linkObj, index) => {
                        return (
                            <li key={index}>
                                <Link to={linkObj.link}>
                                    {linkObj.title}

                                </Link>
                            </li>
                        );
                    })
                }
            </nav>
        </div>
    </>
}

export default Navbar;