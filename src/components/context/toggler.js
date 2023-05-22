import {ThemeContext, themes} from './theme-dark-light'
import React, {useContext} from 'react'
import { Button } from './button'

export const Toggler = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Dark/Light</Button>
        </div>
        )
}