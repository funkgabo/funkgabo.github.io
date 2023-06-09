import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Cv } from './pages/Cv'
import { Hobbies } from './pages/Hobbies'
import { Layout } from './components/Layout'

import { SkeletonTheme } from 'react-loading-skeleton'

import GlobalStyle from './styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { COLORS } from './styles/colors'


const theme = {
    colors: COLORS,
}

export const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Layout>
                    <main>
                        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/Cv' element={<Cv />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/Hobbies' element={<Hobbies />} />
                            </Routes>
                        </SkeletonTheme>
                    </main>
                </Layout>
            </ThemeProvider>
        </React.Fragment>
    )
}