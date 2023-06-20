import React from 'react'
import { DegreesListContainer } from './styles'

export const DegreeList = ({children}) => {
    return(
        <DegreesListContainer>
            {children}
        </DegreesListContainer>
    )
}