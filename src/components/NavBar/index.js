import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarStyles } from './styles'

export const NavBar = () => {
    return (
        <NavBarStyles>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/cv'>CV</Link></li>
                <li><Link to='/about'>ABOUT ME</Link></li>
                <li><Link to='/hobbies'>HOBBIES</Link></li>
            </ul>
        </NavBarStyles>
    )
}
