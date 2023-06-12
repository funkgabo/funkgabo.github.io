import React from 'react'

import { HeaderStyles } from './styles'
import { NotFilledButton } from '../NotFilledButton'

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
                <NotFilledButton buttonName={'CONTACT ME'} />
            </div>
        </HeaderStyles>
    )
}
