import {createContext, useState} from "react";

export const themes = {
    dark: {
        color: 'white',
        background: 'linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)',
        buttonColor: 'white',
        buttonBackground: '#000',
        transition: '.6s ease-in-out'
        
    },
    light: {
        color: 'white',
        background:  'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
        buttonBackground: 'white',
        buttonColor: '#000',
        transition: '.6s ease-in-out'
        
        
    },

}
export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}