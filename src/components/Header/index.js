import React from 'react'

import { HeaderStyles } from './styles'
import { ContactMeButton } from '../ContactMeButton'

export const Header = () => {
    return (
        <HeaderStyles>
            <div>
                <picture>
                    <img src='images/GabrielQuevedoMin.png' />
                    <p>Gabriel Quevedo</p>
                </picture>
            </div>
            <div>
                <ContactMeButton />
            </div>
        </HeaderStyles>
    )
}
