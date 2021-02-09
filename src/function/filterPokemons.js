export function filterPokemonsProps(pokemons) {
  return {
    height: pokemons.height,
    weight: pokemons.weight,
    base_experience: pokemons.base_experience,
    image: pokemons.sprites.front_default,
    abilities: pokemons.abilities
  };
}
