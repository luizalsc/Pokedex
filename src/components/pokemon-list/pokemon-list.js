import React, { useState, useEffect } from 'react'

async function createPokemonList(){
    
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    return(await response.json())
}
//Me retorna um objeto com um array (results) de 10 nomes e url

async function getPokemonsData(){

    const pokemonsListed = await createPokemonList()
    const response = await Promise.all(pokemonsListed.results.map((pokemon) => {
        const pokemonName = pokemon.name
        
       return(getPokemonsUrl(pokemonName))      
    }) )
    return(response)
}
//Retorna um array com o objeto de cada pokemon

async function getPokemonsUrl(pokemonName){
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonName}/`)
    return(await response.json())
    
}
//Faz o fetch para cada pokemon da lista


//-----------------------//


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
                                <img src={`${pokemon.sprites.front_default}`}/>
                                <p>{`${pokemon.name}`}</p>
                            </li>
                        )
                    })
                }
                            
                </ul>
        
                
            </section>
        )
}


export { PokemonList }
