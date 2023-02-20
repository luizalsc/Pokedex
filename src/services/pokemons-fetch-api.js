async function createPokemonList(){
    
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    return(await response.json())
}


async function getPokemonsData(){

    const pokemonsListed = await createPokemonList()
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


export {getPokemonsData}