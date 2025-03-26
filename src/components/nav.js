import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './nav.css'

const Nav = () => {

    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className="nav-container">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <Link to = 'home' spy={true} smooth={true} offset={-700} duration={800} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = 'about' spy={true} smooth={true} offset={-100} duration={800} onClick={closeMenu}>About me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = 'project' spy={true} smooth={true} offset={-100} duration={800} onClick={closeMenu}>Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to = 'contact' spy={true} smooth={true} offset={-150} duration={800} onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav