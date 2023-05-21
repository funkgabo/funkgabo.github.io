import React, { Fragment } from 'react'
import { HomeProfileStyles, HomeSkillsStyles } from './styles'
import { CvSkills } from '../../components/RadarGraph'

export const Home = () => {
    return (
        <Fragment>
            <HomeSkillsStyles>
                <p>Frontend Developer</p>
                <h1>"The Right Way is <span>const</span>ant Learning"</h1>
                <CvSkills />
            </HomeSkillsStyles>
            <HomeProfileStyles>
                <h3>Short Resume</h3>
                <h2>Human Profile</h2>
                <p>I am a brave man who wants to always exceed my limits. I don't believe in defeats, only in learning scars.
                I like music, sports, and I love technology. that's why developing is my way of expressing my love for it.</p>
            </HomeProfileStyles>
        </Fragment>
    )
}
