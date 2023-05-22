import React, {useContext} from 'react';
import styled from 'styled-components'
import {ThemeContext} from './theme-dark-light'

export const Button = (props) => {
    const {theme} = useContext(ThemeContext)

    return(
        <Toggler {...props} 
        style={{
            color: theme.buttonColor, 
            backgroundColor: theme.buttonBackground
        }}/>
    )
}

const Toggler = styled.button`
    padding: 10px;
    border-radius: 30px;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 15px;
    font-weight: 300;
    cursor: pointer;
`