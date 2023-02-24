import { useState, useEffect } from 'react'
import { getPokemonDetails, getPokemonAbilities } from '../../services/pokemons-fetch-api'
import { useParams } from 'react-router-dom'
import { Section, HomePageLink, HomePageLinkContainer } from '../../styles/pokemon-details-style'

const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState({
        name: '',
        abilitiesNames: [],
        moves: [],
        img: {},
        type: []

    })

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const pokemon = await getPokemonDetails(id)
            const abilities = await getPokemonAbilities(id)

            setPokemon({
                name: pokemon.name,
                abilitiesNames: abilities,
                moves: [...pokemon.moves],
                img: {...pokemon.sprites},
                type: [...pokemon.types]
            })
        }

        
        fetchData()
    }, [])
    
    return(
        <Section>
            <HomePageLinkContainer>
            <HomePageLink to='/'>Voltar</HomePageLink>
            </HomePageLinkContainer>
            <div className='card'>
                <h1>{pokemon.name}</h1>
                <div className='img-box'>
                    <img src={`${pokemon.img.front_default}`}/>
                    <img src={`${pokemon.img.back_default}`}/>
                </div>
                <h2>Type</h2>
                <ul>
                    {
                        pokemon.type.map((type, index) => {
                            return (
                                <li key={index}>
                                    <p className='type-text'>{type.type.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='info'>
                <h2>Abilities</h2>
                <ul className='abilities'>
                {
                    pokemon.abilitiesNames.map((ability, index) => {
                        return (
                            <li key={index}>
                                <h3>{ability.name}</h3>
                                <p>
                                {

                                    (ability.effect_entries[0].language.name == "en") ? ability.effect_entries[0].effect : ability.effect_entries[1].effect
                                
                                }
                                </p>
                            </li>
                        )
                    })
                }
                </ul>
                <div>
                    <h2>Moves</h2>
                    <ul className='moves'>
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
            </div>
        </Section>
    )

}

export { PokemonDetails }


