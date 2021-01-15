import React from 'react'
import { IconContext } from 'react-icons/lib'
import {TitleContainer, TitleHeader, TitleIconWrapper, TitleIcon} from './Title.elements'

const Title = () => {
    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <TitleContainer>
                <TitleHeader>
                    Weather Globe 
                </TitleHeader>
                <TitleIconWrapper>
                    <TitleIcon />
                </TitleIconWrapper>
            </TitleContainer>
        </IconContext.Provider>
    )
}

export default Title
