import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarStyles } from './styles'

export const NavBar = () => {
    return (
        <NavBarStyles>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cv'>CV</Link></li>
                <li><Link to='/about'>About Me</Link></li>
                <li><Link to='/hobbies'>Hobbies</Link></li>
            </ul>
        </NavBarStyles>
    )
}
