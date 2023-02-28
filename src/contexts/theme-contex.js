import { createContext, useState } from "react"

export const themes = {

    light: {
        color: 'rgb(83, 84, 57)',
        background: '#F5F6E4',
    },
    dark: {
        color: '#F5F6E4',
        background: 'rgb(83, 84, 57)',
    }

}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{props.children}</ThemeContext.Provider>
    )
}