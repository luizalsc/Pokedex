import { useState, useEffect, useContext } from 'react'
import { getPokemonDetails, getPokemonAbilities } from '../../services/pokemons-fetch-api'
import { useParams } from 'react-router-dom'
import { Section, HomePageLink, HomePageLinkContainer, AbilitiesUl } from '../../styles/pokemon-details-style'
import { ThemeContext } from '../../contexts/theme-contex'

const PokemonDetails = () => {
    
    const { theme } = useContext(ThemeContext)

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
        <Section style={{backgroundColor: theme.background}}>
            <HomePageLinkContainer>
            <HomePageLink to='/'>Voltar</HomePageLink>
            </HomePageLinkContainer>
            <div className='card'>
                <h1>{pokemon.name}</h1>
                <div className='img-box'>
                    <img src={`${pokemon.img.front_default}`}/>
                    <img src={`${pokemon.img.back_default}`}/>
                </div>
                <h2 style={{color: theme.color}}>Type</h2>
                <ul>
                    {
                        pokemon.type.map((type, index) => {
                            return (
                                <li key={index}>
                                    <p className='type-text' style={{color: theme.color}}>{type.type.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='info' style={{backgroundColor: theme.background}}>
                <h2 style={{color: theme.color}}>Abilities</h2>
                <AbilitiesUl style={{color: theme.color}}>
                {
                    pokemon.abilitiesNames.map((ability, index) => {
                        return (
                            <li key={index}>
                                <h3 style={{color: theme.color}}>{ability.name}</h3>
                                <p style={{color: theme.color}}>
                                {
                                    (ability.effect_entries[0].language.name == "en") ? ability.effect_entries[0].effect : ability.effect_entries[1].effect
                                }
                                </p>
                            </li>
                        )
                    })
                }
                </AbilitiesUl>
                <div>
                    <h2  style={{color: theme.color}}>Moves</h2>
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


