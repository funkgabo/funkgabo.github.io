import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Cv } from './pages/Cv'
import { Hobbies } from './pages/Hobbies'
import GlobalStyle from './globalStyles'
import { Layout } from './components/Layout'

export const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cv' element={<Cv />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/Hobbies' element={<Hobbies />} />
                </Routes>
            </Layout>
        </React.Fragment>
    )
}