import { writable } from "svelte/store";
import axios from "axios";
import { checkIfImageExists } from "../lib/utils";

export const pokemonList = writable([]);

export const fetchPokemon = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=898");

        const loadedPokemon = []

        response.data.results.forEach((pokemon, index) => {
            loadedPokemon.push({
                name: pokemon.name,
                url: pokemon.url,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            });
        });

        pokemonList.set(loadedPokemon);
    } catch (error) {
        console.error(error);
    }

};

