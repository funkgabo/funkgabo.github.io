import React from 'react'
import { NotFilledButtonContainer } from './styles'

export const NotFilledButton = ({buttonName}) => {
    return (
        <NotFilledButtonContainer>
                {buttonName}
        </NotFilledButtonContainer>
    )
}
