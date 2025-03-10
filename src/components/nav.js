import React from "react";
import { Link } from "react-scroll";
import "./nav.css";

export default function Nav() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
