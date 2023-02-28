import './App.css'
import { ThemeTogglerButton } from './components/buttons/theme-toggler-button'
import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/theme-contex'


function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle/>
        <ThemeTogglerButton/>
        <AppRoutes/>
      </ThemeProvider>
    </>   
  )
}

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62,5%;
  }

  *{
    marign: 0;
    padding: 0;
    list-style: none;
    border: none;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }
`

export default App
