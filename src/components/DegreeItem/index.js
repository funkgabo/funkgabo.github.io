import React from 'react'

import { DegreeItemContainer } from './styles'
import { DegreesDetailContainer } from './styles'

export const DegreeItem = ({title, since, to, institution, degreeType}) => {
    return (
        <DegreeItemContainer>
            <picture>
                <img src='images/inacapLogo.png' />
            </picture>
            <DegreesDetailContainer>
                <h3>{title}</h3>
                <span>Since: {since}</span>
                <span>To: {to}</span>
                <span>Institution: {institution}</span>
                <span>Degree Type: {degreeType}</span>
            </DegreesDetailContainer>
        </DegreeItemContainer>
    )
}
