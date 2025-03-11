import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './nav.css'

const Nav = () => {

    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to = 'home' spy={true} smooth={true} offset={-700} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to = 'about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About me</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to = 'project' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to = 'skill' spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Skills</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav