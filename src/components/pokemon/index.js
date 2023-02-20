import { useState, useEffect } from 'react'
//import { getPokemonsUrl } from '../../services/pokemons-fetch-api'
import { Link, useParams } from 'react-router-dom'

async function getPokemonDetails(id) {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return (await response.json())
}

const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState({
        name: '',
        abilities: [],
        moves: [],
        img: {},
        type: []

    })

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const pokemon = await getPokemonDetails(id)
            
            setPokemon({
                name: pokemon.name,
                abilities: [...pokemon.abilities],
                moves: [...pokemon.moves],
                img: {...pokemon.sprites},
                type: [...pokemon.types]
            })
        }
        fetchData()
    }, [])

    return(
        <section>
            <Link to='/'>Voltar</Link>
            <div>
                <h1>{pokemon.name}</h1>
                <img src={`${pokemon.img.front_default}`}/>
                <img src={`${pokemon.img.back_default}`}/>
                <h2>Type</h2>
                <ul>
                    {
                        pokemon.type.map((type, index) => {
                            return (
                                <li key={index}>
                                    <p>{type.type.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <h2>Abilities</h2>
                <ul>
                {
                    pokemon.abilities.map((ability, index) => {
                        return (
                            <li key={index}>
                                <p>{ability.ability.name}</p>
                            </li>
                        )
                    })
                }
                </ul>

                <h2>Moves</h2>

                <ul>
                {
                    pokemon.moves.map((move, index) => {
                        return (
                            <li key={index}>
                                <p>{move.move.name}</p>
                            </li>
                        )
                    })
                }
                
                </ul>
                
            </div>
        </section>
    )

}

export { PokemonDetails }


