import React, { useState, useEffect } from 'react'
import { getPokemonsData } from '../../services/pokemons-fetch-api'
import { Link } from 'react-router-dom'

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


    // const addPokemons = (newPokemon) => {
    //     setPokemons({
    //         name: [...pokemons, newPokemon]
    //     })
    // }
    
    return(
            <section>
                <ul>  
                            
                {
                    pokemons.list.map((pokemon, index) => {
                        return(
                            <li key={index}>
                                <Link to={`/pokemons/${pokemon.id}`}>
                                <img src={`${pokemon.sprites.front_default}`}/>
                                <p>{`${pokemon.name}`}</p>
                                </Link>
                            </li>
                        )
                    })
                }
                            
                </ul>
        
                
            </section>
        )
}


export { PokemonList }
