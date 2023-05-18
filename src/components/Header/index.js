import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div>
                <h2>Gabriel Quevedo</h2>
            </div>
            <nav>
                <ul>
                    <Link to='/'>HOME</Link>
                    <Link to='/cv'>CV</Link>
                    <Link to='/about'>ABOUT ME</Link>
                    <Link to='/hobbies'>HOBBIES</Link>
                </ul>
            </nav>
        </header>
    )
}
