import { Link } from "react-router-dom";
import links from "../../data/navbarLinks";
import logo from "./../../assets/logo.png";
import "./navbar.css";
import "bootstrap-icons/font/bootstrap-icons.json"

const Navbar = () => {

    function menuBtnClick() {
        const navPanel = document.getElementById("nav-container");
        navPanel.classList.toggle('open');
    }
    function menuBtnHoverOver(e) {
        e.target.setAttribute("r", "30px");
    }
    function menuBtnHoverOut(e) {
        e.target.setAttribute("r", "20px");
    }

    return <>
        <svg id="menu-btn" width="150px" height="150px">
            <circle
                cx="50%"
                cy="50%"
                r="20px"
                onMouseOver={menuBtnHoverOver}
                onMouseOut={menuBtnHoverOut}
                onClick={menuBtnClick}
            />
        </svg>
        <div id="nav-container">
            <Link to={"/"}>
                <img src={logo} alt="CyberWolfLogo" />
            </Link>
            <nav>
                {
                    links.map((linkObj, index) => {
                        return (
                            <Link key={index} to={linkObj.link}>
                                <li >
                                    {linkObj.title}

                                </li>
                            </Link>
                        );
                    })
                }
            </nav>
        </div>
    </>
}

export default Navbar;