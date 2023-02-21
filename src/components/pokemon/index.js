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
            <Link to='/'>Voltar</Link>
            <Card>
                <H1>{pokemon.name}</H1>
                <Img src={`${pokemon.img.front_default}`}/>
                <Img src={`${pokemon.img.back_default}`}/>
                <H2>Type</H2>
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
            </Card>
            <Div>
                <H2>Abilities</H2>
                <ul>
                {
                    pokemon.abilitiesNames.map((ability, index) => {
                        return (
                            <li key={index}>
                                <H3>{ability.name}</H3>
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
                <MovesInfo>
                    <MoveTitle>Moves</MoveTitle>
                    <MovesList>
                    {
                        pokemon.moves.map((move, index) => {
                            return (
                                <Move key={index}>
                                    <p>{move.move.name}</p>
                                </Move>
                            )
                        })
                    }
                    
                    </MovesList>
                </MovesInfo>
            </Div>
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
`

const Img = styled.img`
    width: 6rem;
`
const H1 = styled.h1`
    text-transform: uppercase;
    font-family: sans-serif;
`
const H2 = styled.h2`
    text-transform: uppercase;
    font-family: sans-serif;
`

const H3 = styled.h3`
    font-size: 1rem;
    text-transform: uppercase;
    font-family: sans-serif;
`
const Card = styled.div`
    grid-area: card;
    padding: 0.5rem;
    background-color: gray;

`
const Div = styled.div`
    grid-area: info;
    padding: 1rem;
    background-color: antiquewhite;
`

const MovesInfo = styled.div`
    display: grid;
    grid: "title"
        "column"/ 1fr;
    grid-gap: 0.5rem;
`

const MoveTitle = styled.h2`
    grid-area: title;
    text-transform: uppercase;
    font-family: sans-serif;
`

const MovesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    grid-area: column;
`

const Move = styled.li`
    align-self: center;
    width: 7rem;
    font-size: 1rem;
    background-color: white;
    margin: 0.5rem;
    padding: 0.5rem;
`

export { PokemonDetails }


// grid: "title title title"
//         "column column column"/ 1fr 1fr 1fr;

