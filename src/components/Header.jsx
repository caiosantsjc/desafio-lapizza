import React from 'react'
import logo from "../assets/logo.svg"
import bgLogo from "../assets/image-1.png"
import "../styles/header.css"
const Header = () => {
    return (
        <div className='headerDiv'>
            <img src={logo} className='logo' width={216} height={143} />
            <img src={bgLogo} className='bgLogo' />
        </div>
    )
}

export default Header