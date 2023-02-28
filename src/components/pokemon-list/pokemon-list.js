import React, { useState, useEffect } from 'react'
import { Button } from '../buttons/button'
import { getPokemonsData } from '../../services/pokemons-fetch-api'
import { Link } from 'react-router-dom'
import { PokemonListSection, ImgContainer } from '../../styles/pokemon-list-style'


const PokemonList = () => {

    const [pokemons, setPokemons] = useState({
            list: [ ]
        })

    useEffect(() => {

        const fetchData = async () => {
            
            const pokemonsData = await getPokemonsData()
            setPokemons({
                
               list: [...pokemonsData]

            })
        }

        fetchData()

        
    }, [])

    // const [ offsetNumber, setOffsetNumber ] = useState(10)

    const addPokemons = async (newPokemons) => {
        
        const newPokemonsData = await getPokemonsData(newPokemons)
        setPokemons({
            list: [...pokemons.list, ...newPokemonsData]
        })
    }

    
    return(
            <PokemonListSection>
                <ul>  
                            
                {
                    pokemons.list.map((pokemon, index) => {
                        return(
                            <li key={index}>
                                <Link to={`/pokemons/${pokemon.id}`}>
                                <ImgContainer>
                                    <img src={`${pokemon.sprites.front_default}`}/>
                                </ImgContainer>
                                <h1>{`${pokemon.name}`}</h1>
                                </Link>
                            </li>
                        )
                    })
                }
                            
                </ul>
        
                <Button addPokemons={addPokemons} >Carregar mais</Button>
            </PokemonListSection>
        )
}


export { PokemonList }
