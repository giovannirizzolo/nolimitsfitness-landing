import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { useTheme } from '../contexts/ThemeContext'


function Header() {

    const themeToggle = useTheme();

    return (
        <div className="header">
            <Link to="/" className="header__homeLink">
                <p>
                    <span>No</span>Limits
                </p>
            </Link>
            <div className="header_themeButtonContainer">
                <a onClick={() => themeToggle?.setLight()} className="light" href="#">Light</a>
                <a onClick={() => themeToggle?.setDark()} className="dark" href="#">Dark</a>
            </div>
        </div>
    )
}

export default Header
