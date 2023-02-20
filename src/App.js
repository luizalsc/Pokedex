import './App.css'
import { Button } from './components/buttons/button'
import { AppRoutes } from './pages/routes'


function App() {
  return (
    <>
      <AppRoutes/>
      <Button>Carregar mais</Button>
      <Button>Mudar tema</Button>
    </>   
  )
}

export default App
