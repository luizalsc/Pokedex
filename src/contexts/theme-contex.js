import { createContext, useState } from "react"

export const themes = {

    light: {
        color: 'rgb(83, 84, 57)',
        colorDetails: '#e5e6c4',
        background: '#F5F6E4',
        backgroundDetails:'rgb(89,99,79)'
    },
    dark: {
        color: '#F5F6E4',
        colorDetails: 'rgb(89,99,79)',
        background: 'rgb(83, 84, 57)',
        backgroundDetails:'#e5e6c4'

    }

}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

//<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
