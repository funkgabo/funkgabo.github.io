import React from 'react'

import { HeaderStyles } from './styles'
import { ContactMeButton } from '../ContactMeButton'

export const Header = () => {
    return (
        <HeaderStyles>
            <div>
                <picture>
                    <img src='images/GabrielQuevedoMin.png' />
                </picture>
                <div>
                    <span><i>Gabriel Quevedo</i></span>
                </div>
            </div>
            <div>
                <ContactMeButton />
            </div>
        </HeaderStyles>
    )
}
