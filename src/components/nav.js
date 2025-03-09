import React from 'react';
import './nav.css';

export default function Nav({ scrollToSection, aboutRef, projectsRef, skillsRef, contactRef }) {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-links">
                    <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Home
                    </li>
                    <li onClick={() => scrollToSection(aboutRef)}>
                        About me
                    </li>
                    <li onClick={() => scrollToSection(projectsRef)}>
                        Projects
                    </li>
                    <li onClick={() => scrollToSection(skillsRef)}>
                        Skills
                    </li>
                    <li onClick={() => scrollToSection(contactRef)}>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    );
};