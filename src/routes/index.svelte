<script>
import { onMount } from "svelte";
import Card from "../components/Card.svelte";
import { pokemonList, fetchPokemon } from "../store/pokemon";
import { capitalizeFirstLetter, checkIfImageExists } from '../lib/utils'
import axios from "axios";
import Pokemon from "../components/Pokemon.svelte";

let color = "black";
let trainer = "workerice";
let active = 0;
let term = "";
let filteredPokemon = [];
let cardPokemon = [];
let render = true;

$: {
    if (term) {
        filteredPokemon = $pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(term.toLowerCase()));
    } else {
        filteredPokemon = $pokemonList;
    }

    // $pokemonList.forEach((pokemon, index) => {
    //         checkIfImageExists(pokemon.img, exists => {
    //             if (exists) {                
    //                 pokemon.ready = true;
    //                 pokemon.name = capitalizeFirstLetter(pokemon.name);
    //                 pokemon = pokemon;
    //             } else {
    //                 // remove pokemon from list
    //                 $pokemonList.splice(index, 1);
    //             }

    //         });

    // });

    // $pokemonList = $pokemonList;
}

$: if (cardPokemon && cardPokemon != []) {
    console.log("destroy");
    render = false;
}
 

const changeTab = (tab) => {
    active = tab;
    if ($pokemonList.length === 0 && tab === 1) {
        fetchPokemon(tab);
    }
}

const addPokemon = (pokemon) => {
    if (cardPokemon.length < 6) {
        cardPokemon.push(pokemon);
        cardPokemon = cardPokemon;
    }
}

const removePokemon = (pokemon) => {
    cardPokemon.splice(cardPokemon.indexOf(pokemon), 1);
    cardPokemon = cardPokemon;
}

</script>

<h1 class="text-gray-200">Yet Another Trainer Card Generator</h1>

{#key cardPokemon}
<Card {color} {trainer} {cardPokemon} on:destroy={render = true}/>
{/key}

<div class="tabs">
    <a class="tab {active === 0 ? 'tab-active' : ''}" on:click={() => changeTab(0)}>Trainer</a>
    <a class="tab {active === 1 ? 'tab-active' : ''}" on:click={() => changeTab(1)}>Pokémon</a>
    <a class="tab {active === 2 ? 'tab-active' : ''}" on:click={() => changeTab(2)}>Badges</a>
</div>

{#if active === 0}
Trainers
{/if}
{#if active === 1}
<div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
    {#each cardPokemon as pokemon}
    <Pokemon on:click={() => removePokemon(pokemon)} pokemon={pokemon} />
    {/each}
</div>
    <input bind:value={term} class="text-black mb-4">
    <div class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {#each filteredPokemon as pokemon}
            <Pokemon on:click={() => addPokemon(pokemon)} pokemon={pokemon} />
        {/each}
    </div>
{/if}
{#if $pokemonList.length === 0}
<button class="btn btn-lg btn-ghost btn-circle loading"></button>
{/if}
{#if active === 2}
Badges
{/if}
