import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Cv } from './pages/Cv'
import { Hobbies } from './pages/Hobbies'
import { Layout } from './components/Layout'
import GlobalStyle from './styles/globalStyle'

export const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Layout>
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cv' element={<Cv />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/Hobbies' element={<Hobbies />} />
                    </Routes>
                </main>
            </Layout>
        </React.Fragment>
    )
}