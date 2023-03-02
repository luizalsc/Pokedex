import './App.css'
import { ThemeTogglerButton } from './components/buttons/theme-toggler-button'
import { AppRoutes } from './pages/routes'
import { GlobalStyle } from './styles/global-style'
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

export default App
