import React, { Fragment } from 'react'
import { HomeProfileStyles, HomeSkillsStyles } from './styles'
import { CvSkills } from '../../components/RadarGraph'
import { NotFilledButton } from '../../components/NotFilledButton'

export const Home = () => {
    return (
        <Fragment>
            <HomeSkillsStyles>
                <img src='images/homebackground.png' />
                <p>Frontend Developer</p>
                <h1>"The Right Way is <span>const</span>ant Learning"</h1>
                <CvSkills />
            </HomeSkillsStyles>
            <HomeProfileStyles>
                <picture>
                    <img src='images/homeAboutPicture.png' />
                </picture>
                <div>
                    <h3>Brief Summary</h3>
                    <h2>Human Profile</h2>
                    <p>I am a brave man who wants to always exceed my limits. I don't believe in defeats, only in learning scars.
                    I like music, sports, and I love technology. that's why developing is my way of expressing my love for it.</p>
                    <NotFilledButton buttonName={'ABOUT ME'} />
                    </div>
            </HomeProfileStyles>
        </Fragment>
    )
}
