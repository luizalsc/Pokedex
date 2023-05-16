import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import { Pokemons } from './pokemons'
import { Pokemon } from './pokemon'


const AppRoutes =() => {
    return(
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Pokemons/>}/>
                <Route exact path='/pokemons/:id' element={<Pokemon/>}/>
            </Routes>
        </HashRouter>
    )
}

export { AppRoutes }