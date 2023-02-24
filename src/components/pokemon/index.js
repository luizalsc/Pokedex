import { useState, useEffect } from 'react'
import { getPokemonDetails, getPokemonAbilities } from '../../services/pokemons-fetch-api'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

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

const Section = styled.section`
    padding: 1rem;
    display: grid;
    grid: "menu menu menu menu"
        "card info info info"
        / 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;

img {
    width: 6rem;
}

.img-box {
    display: flex;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    background-color: #F5F6E4;
}

h1 {
    text-transform: uppercase;
    font-family: sans-serif;
}

h2 {
    text-transform: uppercase;
    font-family: sans-serif; 
}

h3 {
    font-size: 1rem;
    text-transform: uppercase;
    font-family: sans-serif;
}

.type-text {
    text-transform: uppercase;
}

.card {
    grid-area: card;
    padding: 1rem;
    height: 21rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.info {
    grid-area: info;
    padding: 2rem;
    background-color: #F5F6E4;
}

.info li {
    margin-left: 3rem;
}

.abilities {
    display: flex;
}

.abilities li {
    width: 50%;
    background-color: pink;
}

.moves {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-area: column;
}

.moves li {
    display: flex;
    justify-content: center;
    width: 7.5rem;
    height: 4rem;
    background-color: white;
    margin: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    
}

.moves li p {
    text-transform: capitalize;
    text-align: center;
    align-self: center;
}
`
const HomePageLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    color: #000;
    align-self: center;  

&:visited {
    color: #000;
}

&:hover {
    color: #fff;
}
`
 const HomePageLinkContainer = styled.div `
    display: flex;
    background-color: #F5F6E4;
    height: 4rem;
    width: 4rem;
    justify-content: center;
    border-radius: 50%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 0.8px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    transition: background-color 0.3s ease-in-out;

 &:hover {
    background-color: gray;
    cursor: pointer;
}
 `

export { PokemonDetails }


