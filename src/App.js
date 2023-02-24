import './App.css'
import { Button } from './components/buttons/button'
import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components'


function App() {
  return (
    <>
      <GlobalStyle/>
      <Button>Carregar mais</Button>
      <Button>Mudar tema</Button>
      <AppRoutes/>
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
