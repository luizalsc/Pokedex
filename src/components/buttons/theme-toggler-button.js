import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-contex"
import { Button } from "./button"


export const ThemeTogglerButton = () => {

    const { theme , setTheme } = useContext(ThemeContext)

    return(
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Mudar tema</Button>
        </div>
    )
}