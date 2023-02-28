async function createPokemonList(n){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${n}`)
    return(await response.json())
}

async function getPokemonsData(n){

    const pokemonsListed = await createPokemonList(n)
    const response = await Promise.all(pokemonsListed.results.map((pokemon) => {
        const pokemonName = pokemon.name
        
       return(getPokemonsUrl(pokemonName))      
    }) )
    return(response)
}


async function getPokemonsUrl(pokemonName){
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonName}/`)
    return(await response.json())
    
}


async function getPokemonDetails(id) {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return (await response.json())
}

async function getPokemonAbilities(id){
    const abilities = await getPokemonDetails(id)
    const response = await Promise.all(abilities.abilities.map((ability) => {
        const abilityName = ability.ability.name
        
       return(getAbilitiesDetails(abilityName))      
    }) )
    return(response)
}

async function getAbilitiesDetails(abilityName){
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}/`)
    return (await response.json())
}


export { getPokemonAbilities }
export { getPokemonDetails }
export {getPokemonsData}
export { createPokemonList }