import React from 'react'
import { Header } from '../Header'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'

export const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header />
            <NavBar />
            {children}
            <Footer />
        </React.Fragment>
    )
}
