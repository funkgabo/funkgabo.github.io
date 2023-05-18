import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Cv } from './pages/Cv'
import { Hobbies } from './pages/Hobbies'
import { Header } from './components/Header'

export const App = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cv' element={<Cv />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/Hobbies' element={<Hobbies />} />
                </Routes>
            </main>
            <Footer />
        </React.Fragment>
    )
}