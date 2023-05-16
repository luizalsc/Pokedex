import React, { useState, useEffect, useContext } from 'react'
import { Button } from '../buttons/button'
import { getPokemonsData } from '../../services/pokemons-fetch-api'
import { Link } from 'react-router-dom'
import { PokemonListSection, ImgContainer } from '../../styles/pokemon-list-style'
import { ThemeContext } from '../../contexts/theme-contex'


const PokemonList = () => {

    const [pokemons, setPokemons] = useState({
            list: [ ]
        })

    const [ offsetNumber, setOffsetNumber ] = useState(10)

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const fetchData = async () => {
            const pokemonsData = await getPokemonsData()
            setPokemons({ 
               list: [...pokemonsData]
            })
        }
        fetchData()    
    }, [])


    const addPokemons = async (newPokemons) => {
        setOffsetNumber(offsetNumber + 10)
        newPokemons = offsetNumber
        const newPokemonsData = await getPokemonsData(newPokemons)
        setPokemons({
            list: [...pokemons.list, ...newPokemonsData]
        })
    }

    return(
            
            <PokemonListSection style={{backgroundColor: theme.background}}>
                <ul style={{color: theme.color}}>  
                            
                {
                    pokemons.list.map((pokemon, index) => {
                        return(
                            <li key={index} style={{backgroundColor: theme.background}}>
                                <Link to={`/pokemons/${pokemon.id}`}>
                                <ImgContainer style={{backgroundColor: theme.backgroundDetails}}>
                                    <img src={`${pokemon.sprites.front_default}`}/>
                                </ImgContainer>
                                <h1 style={{color: theme.color}}>{`${pokemon.name}`}</h1>
                                </Link>
                            </li>
                        )
                    })
                }
                            
                </ul>
        
                <Button addPokemons={addPokemons} className='button-default'>Mais Pokemons</Button>
            </PokemonListSection>
        )
}


export { PokemonList }
