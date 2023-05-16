import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import { Pokemons } from './pokemons'
import { Pokemon } from './pokemon'


const AppRoutes =() => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path='/' element={<Pokemons/>}/>
                <Route exact path='/pokemons/:id' element={<Pokemon/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }